import Image from "next/image";

const Contacts = () => {
  const contactList = [
    {
      id: 1,
      platform: "/mail-outline.svg",
      details: "mark.joseph.balagtas@outlook.com",
      alt: "email",
      href: "mailto:mark.joseph.balagtas@outlook.com",
    },
    {
      id: 2,
      platform: "/call-outline.svg",
      details: "+63-923-140-7446",
      alt: "phone/whatsapp",
      href: "https://wa.me/+639231407446",
    },
    {
      id: 3,
      platform: "/logo-github.svg",
      details: "514sh",
      alt: "github",
      href: "https://github.com/514sh",
    },
  ];

  return (
    <>
      <h4 className="text-stone-700 text-xl pb-8">Connect with me through:</h4>
      <ul>
        {contactList.map((contact) => (
          <li
            key={contact.id}
            className="flex items-center text-sm md:text-base p-4"
          >
            <Image
              src={contact.platform}
              height={32}
              width={32}
              alt={contact.alt}
              className="mr-2"
            />
            :{" "}
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className=" ml-2 hover:underline"
            >
              {contact.details}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
