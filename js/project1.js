/*===================form1==================*/
function validate1()
{
    let name=document.f1.Name.value;
    let email=document.f1.Mail.value;
    let tel=document.f1.Num.value;
    let alphaexp=/^[a-zA-Z ]+$/;
    let  numexp=/^[0-9]+$/;
    // let emailexp=/^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;
    let emailexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let status1=status2=status3=false;

    if(name=="")
    {
        document.getElementById('nameNote').innerHTML="Please enter your name"
        status1= false;
    }
    else
    {
        if(name.match(alphaexp))
        {
            document.getElementById('nameNote').innerHTML=""
            status1=true;
        }
        else
        {
            document.getElementById('nameNote').innerHTML="Enter characters only"

        }
    }

    if(email=="")
    {
        document.getElementById('emailNote').innerHTML="Please enter your email id"
        status2=false;
    }
    else
    {
        if(email.match(emailexp))
        {
            document.getElementById('emailNote').innerHTML=""
            status2=true;
        }
        else
        {
            document.getElementById('emailNote').innerHTML="Enter valid email id only"
        }
    }

    if(tel=="")
    {
        document.getElementById('telNote').innerHTML="Enter your mobile number"
        status3=false;
    }
    else
    {
        if(tel.match(numexp))
        {
            if(tel.length==10)
            {
                document.getElementById('telNote').innerHTML=""
                status3=true;
            }
            else
            {
                document.getElementById('telNote').innerHTML="Enter 10 digit number only"
            }
        }
        else
        {
            document.getElementById('telNote').innerHTML="Enter numbers only"
        }
    }

    if(status1==true && status2==true && status3==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/*=====================form2============================*/

function validate2()
{
    let uname=document.f2.uname.value;
    let mail=document.f2.mail.value;
    let phone=document.f2.number.value;
    let subject=document.f2.sub.value;
    let message=document.f2.msg.value;
    let alphaExp=/^[a-zA-Z ]+$/;
    // let mailExp=/^[a-zA-Z0-9]+@+[a-zA-Z]+.+[a-zA-Z]+$/;
    let mailExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let numExp=/^[0-9]+$/;

    let status1=status2=status3=status4=status5=false;

    if(uname=="")
    {
        document.getElementById('unameNote').innerHTML="Please enter your name"
        status1=false;
    }
    else
    {
        if(uname.match(alphaExp))
        {
            document.getElementById('unameNote').innerHTML=""
            status1=true;
        }
        else
        {
            document.getElementById('unameNote').innerHTML="Please enter characters only"
            status1=false;
        }
    }

    if(mail=="")
    {
        document.getElementById('mailNote').innerHTML="Please enter your mail id"
        status2=false;
    }
    else
    {
       if(mail.match(mailExp))
       {
            document.getElementById('mailNote').innerHTML=""
            status2=true;
       }
       else
       {
         document.getElementById('mailNote').innerHTML="Please enter valid mail id"
          status2=false;
       }
    }

    if(phone=="")
    {
        document.getElementById('numNote').innerHTML="Please enter your number"
        status3=false;
    }
    else
    {
        if(phone.match(numExp))
        {
            if(phone.length==10)
            {
                document.getElementById('numNote').innerHTML=""
                status3=true;
            }
            else
            {
                document.getElementById('numNote').innerHTML="Enter 10 digit number only"
                status3=false;
            }
        }
        else
        {
            document.getElementById('numNote').innerHTML="Please enter digits only"
            status3=false;
        }
    }

    if(subject=="")
    {
        document.getElementById('subNote').innerHTML="Please enter your subject"
        status4=false;
    }
    else
    {
        if(subject.match(alphaExp))
        {
            document.getElementById('subNote').innerHTML=""
            status4=true;
        }
        else
        {
            document.getElementById('subNote').innerHTML="Please enter characters only"
            status4=false;
        }
    }

    if(message=="")
    {
        document.getElementById('msgNote').innerHTML="Please enter your message"
        status5=false;
    }
    else
    {
        document.getElementById('msgNote').innerHTML=""
        status1=true;
    }

    if(status1==true && status2==true && status3==true && status4==true && status5==true)
    {
        return true;
    }
    else
    {
        return false;
    }

}


