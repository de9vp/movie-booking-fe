import { Form, Input, Button, Checkbox, Row, Typography, notification } from 'antd';
import callApi from './../../../apis/callApi';
import { useNavigate } from 'react-router-dom'

const { Title } = Typography;

const SignIn = () => {
  let navigate = useNavigate()

  const onFinish = async (values) => {
    console.log(values);
    const res = await callApi("QuanLyNguoiDung/DangNhap", "POST", values)
    if (res?.status === 200) {
      localStorage.setItem("userInfo", JSON.stringify(res.data))
      if (res.data.maLoaiNguoiDung === "KhachHang") {
        navigate("/")
      } else {
        navigate("/admin")
      }
    } else {
      notification.open({
        message: "Thông báo",
        description:
          res.response.data,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <div style={{
        padding: "20px",
        boxShadow: "0 2px 10px rgb(0 0 0 / 30%)",
        borderRadius: "10px"
      }}
      >
        <Title align="middle">SIGN IN</Title>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Row >
  );
};

export default SignIn