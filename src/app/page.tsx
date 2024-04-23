export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-6">Welcome to Our Next App</h1>
      <p className="text-xl text-center mb-4">Explore the world of Next.js with our sophisticated demo application.</p>
      <nav className="flex justify-center space-x-4">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Home
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          About
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Contact
        </a>
      </nav>
    </div>
  );
}
