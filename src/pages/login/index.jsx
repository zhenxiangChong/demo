import React, { Component } from 'react'
import './index.css'
import avatar from './images/avatar.jpg'
import { Form, Input, Button, Checkbox } from 'antd'
import 'antd/dist/antd.css'

export default class Login extends Component {
    render() {
        const layout = {
            labelCol: {
                span: 7,
            },
            wrapperCol: {
                span: 12,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 8,
            },
        };
        const onFinish = (values) => {
            console.log('Success:', values);
        };
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="login">
                <img src={avatar} alt="" />
                <section className="login-container">
                    <h2>用户登录</h2>
                    <Form {...layout} name="basic" initialValues={{ remember: true, }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}>
                        <Form.Item label="用户名" name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入你的用户名!',
                                },
                                { 
                                    min: 4, message: '用户名至少4位!' 
                                },
                                {
                                    max: 10,message: '用户名最长10位!' 
                                }
                            ]}>
                            <Input placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入你的密码!',
                                },
                                {
                                    validator: (_, value) =>{
                                        if(value.length >= 6 && value.length<=10) {
                                            return Promise.resolve()
                                        }else{
                                            return Promise.reject('密码长度必须是6~10位')
                                        }
                                    }
                                }
                            ]}
                        >
                            <Input.Password placeholder="Passwod"/>
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                          </Button>
                        </Form.Item>
                    </Form>
                 </section>
            </div>
        )
    }
}

