import { FC, memo, useEffect, useState } from "react";
import { Thread } from "../type/type";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from "react-bootstrap";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";

export const EditThread: FC = memo(() => {
  const [ threadData, setThreadData ] = useState<Thread | null >(null);
  const { threadId } = useParams<{ threadId: string }> ();
  const navigate = useNavigate();

  useEffect(() => {
    // Axiosなどを使用してデータを取得し、ステートにセットします
    const fetchThreadData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/thread_bbs/${threadId}`);
            setThreadData(response.data);
        } catch (error) {
            console.log("エラー:", error);
        }
    };

    fetchThreadData();
}, [threadId]);

const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (threadData) {
      try {
          await axios.patch(`http://127.0.0.1:8000/api/thread_bbs/${threadId}`, threadData);
          navigate("/thread_bbs");
      } catch (error) {
          console.log("エラー:", error);
      }
  }
};

  return (
    <>
      <Header />
      <div>
        {threadData && (
          <Card style={{ width: '100%', margin: '30px 0' }}>
            <Card.Header style={{ textAlign: 'center', fontWeight: 'bold' }}>
              スレッド編集フォーム
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleEditSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>名前*</Form.Label>
                  <Form.Control 
                    type="text"
                    placeholder="名前を入力"
                    name="name"
                    value={threadData.name}
                    onChange={e => setThreadData({...threadData, name: e.target.value})}
                    style={{ marginBottom: '10px' }}
                  />
                </Form.Group>

                <Form.Group controlId="formTitle">
                  <Form.Label>タイトル*</Form.Label>
                  <Form.Control 
                    type="text"
                    placeholder="タイトルを入力"
                    name="title"
                    value={threadData.title}
                    onChange={e => setThreadData({...threadData, title: e.target.value})}
                    style={{ marginBottom: '10px' }}
                  />
                </Form.Group>

                <Form.Group controlId="formContent">
                  <Form.Label>本文*</Form.Label>
                  <Form.Control 
                    as="textarea"
                    rows={3}
                    placeholder="本文を入力"
                    name="content"
                    value={threadData.content} 
                    onChange={e => setThreadData({...threadData, content: e.target.value})}
                    style={{ marginBottom: '10px' }}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ margin: '0 auto' }}>
                  更新
                </Button>
              </Form>
            </Card.Body>
          </Card>
        )}
      </div>
      <div style={{textAlign: 'right'}}>
            <ScrollToTopButton />
          </div>
      <Footer />
    </>
  );
})