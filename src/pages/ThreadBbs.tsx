import { FC, memo, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";
import { Button, Card, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addThread, deleteThread, setThreads, ThreadsState } from '../redux/threadsSlice';
import { Link, useNavigate } from "react-router-dom";
import { Thread } from "../type/type";

export const ThreadBbs: FC = memo(() => {
  const dispatch = useDispatch();
  const threads = useSelector((state: { threads: ThreadsState }) => state.threads.threads);

  const [ formData, setFormData] = useState({ title: '', name: '', content: ''});

  const [errorMessages, setErrorMessages] = useState({ name: '', title: '', content: '' });

  const navigate = useNavigate();

  const baseURL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8000";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrorMessages = { name: '', title: '', content: '' };
    let isValid = true;

    if (!formData.name) {
      newErrorMessages.name = '名前を入力してください';
      isValid = false;
    }
    if (!formData.title) {
      newErrorMessages.title = 'タイトルを入力してください';
      isValid = false;
    }
    if (!formData.content) {
      newErrorMessages.content = '本文を入力してください';
      isValid = false;
    }

    setErrorMessages(newErrorMessages);

    if (!isValid) {
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/api/thread_bbs`, formData);
      console.log(response.data);
      dispatch(addThread(response.data.post));
      setFormData({ title: '', name: '', content: ''});
    } catch (error) {
      console.log('エラー:', error);
    }
  }

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/thread_bbs`);
        dispatch(setThreads(response.data));
        console.log(response.data.post);
      } catch (error) {
        console.log('エラー:', error);
      }
    };

    fetchThreads();
  }, [dispatch, baseURL]);

  const handleEdit = (thread: Thread) => {
    navigate(`/thread_bbs/${thread.id}/edit`)
  }

  const handleDelete = async (threadId: number) => {
    try {
      await axios.delete(`${baseURL}/api/thread_bbs/${threadId}`);
      dispatch(deleteThread(threadId));
    } catch {
      console.log('エラー');
    }
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
        <Header />
        <Container fluid style={{padding: '0 60px'}}>
          <Card style={{ width: '100%', margin: '30px 0', textAlign: 'center', fontWeight: 'bold' }}>
            <Card.Header>掲示板</Card.Header>
          </Card>
          <Card style={{ width: '100%', margin: '30px 0' }}>
            <Card.Header style={{ textAlign: 'center', fontWeight: 'bold'}}>お知らせ</Card.Header>
            <Card.Body>
              <Card.Text>
                こちらは掲示板になります。<br />
                自由に書き込みができますが、他者への攻撃的な書き込みはご遠慮ください。
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '100%', margin: '30px 0' }} >
            <Card.Header>スレッド一覧</Card.Header>
            <Card.Body>
            {threads.map((thread: Thread, index: number) => (
              <div
                key={thread.id}
                style={{
                  marginBottom: '10px',
                  borderBottom: index !== threads.length - 1 ? 'solid 1px black' : 'none',
                  padding: '10px'
                }}
              >
                <strong>
                  <Link to={`/thread_bbs/${thread.id}`}  style={{ color: 'black' }}>{thread.title}</Link>
                </strong>
                <p>{thread.name}</p>
                <p>{thread.content}</p>
                <Button variant="success" onClick={() => handleEdit(thread)}>編集</Button>
                <Button variant="danger" onClick={() => handleDelete(thread.id)}>削除</Button>
              </div>
            ))}

            </Card.Body>
          </Card>

          <Card  style={{ width: '100%', margin: '30px 0' }}>
            <Card.Header style={{ textAlign: 'center', fontWeight: 'bold'}}>新規スレッドフォーム</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>名前*</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="名前を入力" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    style={{marginBottom: '10px'}}
                  />
                  <div className="text-danger">{errorMessages.name}</div>
                </Form.Group>

                <Form.Group controlId="formTitle">
                  <Form.Label>タイトル*</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="タイトルを入力" 
                    name="title"
                    value={formData.title} 
                    onChange={handleChange}
                    style={{marginBottom: '10px'}}
                  />
                  <div className="text-danger">{errorMessages.title}</div>
                </Form.Group>

                <Form.Group controlId="formContent">
                  <Form.Label>本文*</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3}
                    placeholder="本文を入力" 
                    name="content"
                    value={formData.content} 
                    onChange={handleChange}
                    style={{marginBottom: '10px'}}
                  />
                  <div className="text-danger">{errorMessages.content}</div>
                </Form.Group>

                <Button variant="primary" type="submit" style={{ margin: '0 auto'}}>
                  投稿
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div style={{textAlign: 'right'}}>
            <ScrollToTopButton />
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
});