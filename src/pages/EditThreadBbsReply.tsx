import { FC, memo, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Reply } from "../redux/replySlice";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";
import { Button, Card, Container, Form } from "react-bootstrap";

export const EditThreadBbsReply: FC = memo(() => {
  const [ replyData, setReplyData ] = useState<Reply | null >(null);
  const { replyId, threadId } = useParams<{ replyId: string, threadId: string }>();
  const navigate = useNavigate();

  const baseURL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    const fetchReplyData = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/thread_bbs_reply/${replyId}`);
            setReplyData(response.data);
        } catch (error) {
            console.log("取得エラー:", error);
        }
    };

    fetchReplyData();
  }, [replyId, baseURL]);

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (replyData) {
        try {
            await axios.patch(`${baseURL}/api/thread_bbs_reply/${replyId}`, replyData);
            navigate(`/thread_bbs/${threadId}`);
          } catch (error) {
            console.log("エラー:", error);
        }
    }
  };

  return (
    <>
      <Header />
      <Container fluid style={{padding: '0 60px'}}>
        <div>
          {replyData && (
            <Card style={{ width: '100%', margin: '30px 0' }}>
              <Card.Header style={{ textAlign: 'center', fontWeight: 'bold' }}>
                返信編集フォーム
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleEditSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>名前*</Form.Label>
                    <Form.Control 
                      type="text"
                      placeholder="名前を入力"
                      name="name"
                      value={replyData.name}
                      onChange={e => setReplyData({...replyData, name: e.target.value})}
                      style={{ marginBottom: '10px' }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formContent">
                    <Form.Label>返信内容*</Form.Label>
                    <Form.Control 
                      as="textarea"
                      rows={3}
                      placeholder="返信内容を入力"
                      name="content"
                      value={replyData.content} 
                      onChange={e => setReplyData({...replyData, content: e.target.value})}
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
      </Container>
      <div style={{textAlign: 'right'}}>
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
})