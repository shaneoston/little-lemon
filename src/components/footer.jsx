export const Footer = () => {
  return (
    <footer className="bg-llgreen">
      <div className="container max-w-4xl p-6 flex justify-around md:justify-end text-white text-xl">
        <div className="mr-8">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="">Order online</a></li>
            <li><a href="">Login</a></li>
          </ul>
        </div>
        <div>
          <p>Contact</p>
          <ul>
            <li><a href="">1234 Anywhere Street</a></li>
            <li><a href="">London NW11 02J</a></li>
            <li><a href="">(0)20 7777 8888</a></li>
            <li><a href="">food@littlelemon.com</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};