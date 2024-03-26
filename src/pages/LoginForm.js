import { ReactComponent as MailIcon } from 'src/icons/mail.svg'

export default function LoginForm() {
    return (
      <div style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: "0 auto", 
          padding: "0", 
      }}
      >
        <form style={{
            display: "flex", 
            flexDirection: "column", 
            padding: '12px',
            flex: .3,
            backgroundColor: "#005AFF", 
            border: '2px black solid'}}
          >
          <IconInput label={'Email'} iconRender={<MailIcon style={{position: 'relative', top: '-3', left: '3', height: '16', width: '16'}}/>}/>
          <br></br>
          <IconInput label={'Password'} iconRender={<MailIcon style={{position: 'relative', top: '-3', left: '3', height: '16', width: '16'}}/>}/>
          <br></br>
          <br></br>
          <br></br>
          <TextButton text={'Login'}/>
          <br/>
          <TextButton text={'Create Account'}/>
          <br/>
          <TextButton text={'Forgot Password'}/>
        </form>
        <br></br>
      </div>
    )
  }
  
  function IconInput({label, iconRender}) {
    return (
      <div>
      <label style={{
        color: '#FFDB99', 
        fontFamily: 'roboto',             
        textShadow: '1px 1px 1px  #000, 1px 1px 1px  #000, 1px 1px 1px  #000, 1px 1px 1px  #000'}}>
          <b>{label}</b>
      </label>
      <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
        {/* <div> */}
        <div style={{position: 'relative', height: '60%', flex: .5, margin: '8px'}}>
          <div style={{
            position: 'absolute',
            top: '10%',
            backgroundColor: '#FFA500', 
            border: '12px #FFA500 solid', 
            borderRadius: '24px', 
        }}/>
        {iconRender}
        </div>
        <input type='text' style={{flex: .75, margin: '4px', border: '2px #FFA500 solid', borderRadius: '2px'}}></input>
      </div>
    </div>
    )
  };
  
  function TextButton({text}) {
    return (
      <button  style={{
        width: '200px',
        alignSelf: 'center',
        backgroundColor: "#FFA500",
        borderRadius: '16px',
        boxShadow: '2px 2px 2px'
    }}>{text}</button>
    )
  }