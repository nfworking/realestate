import toast from "react-hot-toast";
import "./contact.css";
import addNotification from "react-push-notification";

const clickToNotify = ()=>{
  addNotification({
    title: 'TheSurgeHomes',
    message: 'Your request has been sent, please check your emails',
    duration: 4000,
    native: true,
    icon: './house.ico'
  });
  };

export default function Contact() {
  const onSubmit = async (event) => {
    addNotification({
      title: 'TheSurgeHomes',
      message: 'Your Message has been sent',
      duration: 10000,
      native: true,
      icon: '/r1.png'
    });

    event.preventDefault();
    toast("Sending...", {
      style: {
        background: "#fff",
        color: "#000",
      },
    });
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB_ACCESS_TOKEN);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast("Message sent successfully", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#000",
        },
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Error!");
    }
  };

  return (
    <div className="contact">
      <div className="ct-form">
        <span>Contact form</span>
        <form className="form" onSubmit={onSubmit
        } >
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            name="message"
            placeholder="Sample message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <a href="/">
          <button>Back to Home</button>
          </a>        
      </div>
    </div>
  );
}
