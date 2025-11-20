const Footer = () => {
  return (
    <footer className="bg-secondary text-neutral-100 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black font-heading bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              SwoleGym
            </h3>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              Build strength. Build confidence. Become your best version.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-primary transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-primary transition">
                  Trainers
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#" className="hover:text-primary transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Membership Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4 text-neutral-300">
              <a href="#" className="hover:text-primary transition">
                Instagram
              </a>
              <a href="#" className="hover:text-primary transition">
                Facebook
              </a>
              <a href="#" className="hover:text-primary transition">
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} SwoleGym. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
