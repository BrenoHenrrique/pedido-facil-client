import {Button, Card, Flex, Form, Input, Space, Typography} from "antd";
import {useHistory} from "react-router-dom";
import {API} from "../../util/constsUtils";

export default function CreateUser() {
    const [form] = Form.useForm();
    const history = useHistory();

    async function handleSubmit() {
        const response = await API.auth.createUserService.index();
    }

    function redirect() {
        history.push("/login");
    }

    return (
        <Flex form={form} className="container-login">
            <Card className={"container-card-login"} hoverable={true}>
                <Flex justify={"center"}>
                    <Typography.Title strong>Crie sua conta!</Typography.Title>
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
                        <Input style={{width: 345}} placeholder="Digite seu celular" maxLength={11}/>
                    </Form.Item>
                    <Form.Item
                        label="Senha"
                        name="password"
                        rules={[{required: true, message: "Por favor, insira sua senha"}]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Digite sua senha"/>
                    </Form.Item>
                    <Form.Item
                        label="Confirme sua senha"
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            {required: true, message: "Por favor, confirme sua senha"},
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("As senhas não coincidem"));
                                },
                            }),
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Confirme sua senha"/>
                    </Form.Item>
                    <Space direction="vertical" style={{width: "100%"}} wrap={true}>
                        <Button style={{float: "right"}} type="link" onClick={redirect}>Já tenho conta</Button>
                    </Space>
                    <Flex justify="space-between">
                        <Button block type="primary" htmlType="submit">
                            Criar Conta.
                        </Button>
                    </Flex>
                </Form>
            </Card>
        </Flex>
    );
}
