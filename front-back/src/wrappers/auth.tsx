import React from 'react'
import { Redirect ,connect} from 'umi'

interface Props{
  loginStatus:boolean
}

const Auth:React.FC<Props> = (props) => {
  const { loginStatus} = props;
  if (loginStatus) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }

}

export default connect((state)=>{
  return {
    loginStatus:state.user.loginStatus
  }
})(Auth)
