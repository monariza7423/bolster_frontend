import { FC, memo, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";
import { Button, Card, Container, Form } from "react-bootstrap";

export const ThreadBbs: FC = memo(() => {
  // backend作成後変更
  const threads = [
    {id: 1, title: 'ダミー１', name: 'ダミー１さん', contents: 'ダミー１の本文です' },
    {id: 2, title: 'ダミー2', name: 'ダミー2さん', contents: 'ダミー2の本文です' }
  ]

  const [ formData, setFormData] = useState({ title: '', name: '', content: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              {threads.map((thread, index) => (
                <div
                  key={thread.id}
                  style={{
                    marginBottom: '10px',
                    borderBottom: index !== threads.length - 1 ? 'solid 1px black' : 'none',
                    padding: '10px'
                  }}
                >
                  <strong>{thread.title}</strong>
                  <p>{thread.name}</p>
                  <p>{thread.contents}</p>
                </div>
              ))}
            </Card.Body>
          </Card>

          <Card  style={{ width: '100%', margin: '30px 0' }}>
            <Card.Header style={{ textAlign: 'center', fontWeight: 'bold'}}>新規スレッドフォーム</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                  <Form.Label>名前*</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="名前を入力" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    style={{marginBottom: '10px'}}
                  />
                </Form.Group>

                <Form.Group controlId="formName">
                  <Form.Label>タイトル*</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="タイトルを入力" 
                    name="title"
                    value={formData.title} 
                    onChange={handleChange}
                    style={{marginBottom: '10px'}}
                  />
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