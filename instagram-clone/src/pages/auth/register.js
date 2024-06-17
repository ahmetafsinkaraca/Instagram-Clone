import { AiFillFacebook } from "react-icons/ai";
import Input from "components/Input";
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { RegisterSchema } from 'validation';
import { Link } from 'react-router-dom';
import Separator from 'components/Separator';
import Button from 'components/Button';
import { register } from 'route/firebase.js';
import { Helmet } from "react-helmet";

export default function Register() {

  const navigate = useNavigate()
  const location = useLocation()

	const handleSubmit = async (values, actions) => {
		const response = await register(values)
		if (response) {
			navigate(location.state?.return_url || '/', {
				replace: true
			})
		}
	}

  return (
    <div className="h-full w-full items-center flex justify-center gap-x-8 overflow-auto flex-wrap bg-white ">

      <Helmet>
        <title>Register • Instagram</title>
      </Helmet>

      <div className="w-[350px] grid gap-y-3">
        <div className="border bg-white relative pt-10 pb-6 p-12">
          <a href='#' className="flex justify-center mb-4">
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" sizes={16} alt="" className="h-[51px]" />
          </a>

          <p className='text-md font-semibold text-gray-500 pb-4 text-center'>Sign up to see your friends' photos and videos.</p>


          <Button>
            <AiFillFacebook size={20} />
            Login with Facebook
          </Button>
          
          <Separator />

          <Formik
            validationSchema={RegisterSchema}
            initialValues={{
              email:'',
              fullname:'',
              username: '',
              password: '',
            }}
            onSubmit={handleSubmit}>
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="grid gap-y-2">
                <Input name='email' label='Phone number, username or email'/>
                <Input name='fullname' label='Name Surname'/>
                <Input name='username' label='username'/>
                <Input type="password" name='password' label='Password' />
                <p className='text-xs text-gray-400 pb-2 text-center'>People using our service may have uploaded your contact information to Instagram. <a href='#' className='font-semibold'>Learn More</a></p>
                <p className='text-xs text-gray-400 text-center'>By signing up, you agree to <a href='#' className='font-semibold'>our  Terms</a> , <a href='#' className='font-semibold'>Privacy Policy</a> and <a href='#' className='font-semibold'>Cookies Policy</a> .</p>
                <Button type='submit' disabled={!isValid || !dirty || isSubmitting}>
                  Register  
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="bg-white border  p-4 text-center">
        Dont have any account?<Link to='/auth/login' className=" text-md font-semibold text-brand"> Login</Link>
        </div>

        <p className='items-center flex justify-center font-serif text-sm'>Download the app.</p>

        <div className='flex items-center justify-center gap-x-3 py-1'>
          <a href='#' style={{ width: '135px', height: 'auto' }}><img src="https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png" /></a>
          <a href='#' style={{ width: '110px', height: 'auto' }}><img src="https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png" /></a>
        </div>
      </div>

    </div>
  )
}
