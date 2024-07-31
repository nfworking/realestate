import toast from "react-hot-toast";
import "./contact.css";

export default function Contact() {
  const onSubmit = async (event) => {
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
      toast("Email sent successfully", {
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
        <form className="form" onSubmit={onSubmit}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            name="message"
            placeholder="Sample message"
            required
          ></textarea>
          <button onlick={Notification} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
