import supabase from "@lib/supabase";

export default async (req, res) => {
  const { subject, department, name, email, message } = req.body;

  console.log("Contact Info: ", {
    subject,
    department,
    name,
    email,
    message,
  });

  if (req.method === "POST") {
    if (
      (!email || !email.includes("@") || !name || name.trim() === "",
      !subject ||
        subject.trim() === "" ||
        !message ||
        message.trim() === "" ||
        !department)
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }
  }

  const storeContactInfo = {
    email,
    department,
    subject,
    name,
    message,
    website: "Prototype.NEXT",
  };

  try {
    await supabase
      .from("contact_messages")
      .insert([storeContactInfo])
      .select();
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({
      message: "Oops something went wrong, storing message faild",
    });
  }

  res.status(201).json({
    message: "Succesfuly Stored",
    payload: storeContactInfo,
  });
};
