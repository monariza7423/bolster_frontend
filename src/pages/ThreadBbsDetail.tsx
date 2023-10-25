import { FC, memo, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Thread } from "../type/type";
import axios from "axios";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Form } from "react-bootstrap";
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";
import { useDispatch, useSelector } from "react-redux";
import { RepliesState, addReply, setReplies, deleteReply, Reply } from "../redux/replySlice";

export const ThreadBbsDetail: FC = memo(() => {
  const params = useParams<{ threadId: string }>();
  const threadId = params.threadId || "";
  const [thread, setThread] = useState<Thread | null>(null);
  const dispatch = useDispatch();
  const replies = useSelector((state: { replies: RepliesState }) => state.replies.replies[threadId] || []);
  const [ formData, setFormData] = useState({ name: '', content: ''});
  const [errorMessages, setErrorMessages] = useState({ name: '', content: '' });
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8000";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  useEffect(() => {
    const fetchThreadDetail = async () => {
      try {
        const threadResponse = await axios.get(`${baseURL}/api/thread_bbs/${threadId}`);
        setThread(threadResponse.data);

        const repliesResponse = await axios.get(`${baseURL}/api/thread_bbs_replies?thread_id=${threadId}`);
        dispatch(setReplies({ threadId: threadId, replies: repliesResponse.data }));

      } catch (error) {
        console.log('エラー:', error);
      }
    };
  
    fetchThreadDetail();
  }, [threadId, baseURL]);

  if (!threadId) {
    return null;
  }

  const handleReplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrorMessages = { name: '', content: '' };
    let hasError = false;

    if (!formData.name) {
      newErrorMessages.name = '名前を入力してください';
      hasError = true;
    }
    if (!formData.content) {
      newErrorMessages.content = '本文を入力してください';
      hasError = true;
    }

    setErrorMessages(newErrorMessages);

    if (hasError) {
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/api/thread_bbs_reply`, {
        thread_id: threadId,
        name: formData.name,
        content: formData.content
      });  
        dispatch(addReply({ threadId: threadId, reply: response.data.reply }));
        setFormData({ name: '', content: '' });
    } catch (error) {
        console.error('返信の保存に失敗しました：', error);
    }
  };

  const handleReplyEdit = (reply: Reply) => {
    navigate(`/thread_bbs/${threadId}/thread_bbs_reply/${reply.id}/edit`);
  }

  const handleReplyDelete = async (replyId: number) => {
      try {
        await axios.delete(`${baseURL}/api/thread_bbs_reply/${replyId}`)
        dispatch(deleteReply({threadId, replyId}));
      } catch (error) {
        console.log('返信削除失敗');
      }
  };


  return (
    <>
      <Header />
      <Container fluid style={{padding: '0 60px'}}>
          <Card style={{ width: '100%', margin: '30px 0', textAlign: 'center', fontWeight: 'bold' }}>
            <Card.Header>
              <Link to="/thread_bbs">掲示板</Link>
            </Card.Header>
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
            <Card.Header>スレッド詳細</Card.Header>
            <Card.Body>
              <div
                style={{
                  marginBottom: '10px',
                  padding: '10px',
                  borderBottom: '1px solid black'
                }}
              >
                <div style={{ width: '100%', borderBottom: '1px dashed black' }}>
                  <strong style={{ fontSize: '25px' }}>
                    {thread?.title}
                  </strong>
                </div>
                <p style={{color: 'gray', fontSize: '15px', marginTop: '5px'}}>{thread?.name}</p>
                <p>{thread?.content}</p>
              </div>
              <div>
                {replies.map((reply: Reply) => (
                  <div
                    key={reply.id}
                    style={{
                      marginBottom: '10px',
                      padding: '10px',
                      border: '1px solid black',
                      borderRadius: '5px',
                    }}
                  >
                    <p style={{color: 'gray', fontSize: '15px'}}>{reply.name}</p>
                    <p>{reply.content}</p>
                    <Button variant="success" onClick={() => handleReplyEdit(reply)}>編集</Button>
                    <Button variant="danger" onClick={() => handleReplyDelete(reply.id)}>削除</Button>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>

          <Card  style={{ width: '100%', margin: '30px 0' }}>
            <Card.Header style={{ textAlign: 'center', fontWeight: 'bold'}}>新規スレッドフォーム</Card.Header>
            <Card.Body>
              <Form onSubmit={handleReplySubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>名前*</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="名前を入力" 
                    name="name" 
                    value={formData.name} 
                    style={{marginBottom: '10px'}}
                    onChange={handleChange}
                  />
                  <div className="text-danger">{errorMessages.name}</div>
                </Form.Group>

                <Form.Group controlId="formContent">
                  <Form.Label>本文*</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3}
                    placeholder="本文を入力" 
                    name="content"
                    value={formData.content} 
                    style={{marginBottom: '10px'}}
                    onChange={handleChange}
                  />
                  <div className="text-danger">{errorMessages.content}</div>
                </Form.Group>

                <Button variant="primary" type="submit" style={{ margin: '0 auto'}}>
                  返信
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div style={{textAlign: 'right'}}>
            <ScrollToTopButton />
          </div>
        </Container>
      <Footer />
    </>
  );
})