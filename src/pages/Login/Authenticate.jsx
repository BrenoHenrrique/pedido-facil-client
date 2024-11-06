import {Button, Card, Flex, Form, Input, Space, Typography} from "antd";
import {useHistory} from "react-router-dom";
import {useState} from "react";

export default function Authenticate() {
    const [form] = Form.useForm();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    function handleSubmit() {

    }

    function redirect() {
        history.push("/create-user");
    }

    return (
        <Flex form={form} className="container-login">
            <Card className={"container-card-login"} hoverable={true}>
                <Flex justify={"center"}>
                    <Typography.Title>Bem vindo de volta!</Typography.Title>
                </Flex>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Celular"
                        name="username"
                        rules={[
                            {required: true, message: "Por favor, digite seu celular com DDD"},
                            {
                                pattern: /^\d{2}9\d{8}$/,
                                message: "O celular deve conter DDD, iniciar com 9 e ter 11 dígitos"
                            }
                        ]}
                    >
                        <Input placeholder="Digite seu celular" maxLength={11}/>
                    </Form.Item>
                    <Form.Item
                        label="Senha"
                        name="password"
                        rules={[{required: true, message: "Por favor, digite sua senha"}]}
                    >
                        <Input.Password placeholder="Digite sua senha"/>
                    </Form.Item>
                    <Space direction="vertical" style={{width: "100%"}} wrap={true}>
                        <Button
                            style={{float: "right"}}
                            type="link"
                            onClick={redirect}
                        >Não tem conta? Crieaqui.</Button>
                    </Space>
                    <Flex justify="space-between">
                        <Button block type="primary" htmlType="submit">
                            Entrar
                        </Button>
                    </Flex>
                </Form>
            </Card>
        </Flex>
    );
}
