export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-light mb-8">Privacy Policy</h1>
      <div className="prose prose-sm">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Wayra. We respect your privacy and are committed to protecting your personal data. This privacy
          policy will inform you about how we look after your personal data when you visit our website and tell you
          about your privacy rights and how the law protects you.
        </p>

        <h2>2. Data We Collect</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped
          together as follows:
        </p>
        <ul>
          <li>Identity Data: includes first name, last name, username or similar identifier</li>
          <li>Contact Data: includes email address and telephone numbers</li>
          <li>
            Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and
            location, browser plug-in types and versions, operating system and platform
          </li>
          <li>Usage Data: includes information about how you use our website and services</li>
          <li>Search Data: includes your travel search queries and preferences</li>
        </ul>

        <h2>3. How We Use Your Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
          in the following circumstances:
        </p>
        <ul>
          <li>To provide you with travel recommendations based on your search queries</li>
          <li>To improve our services and user experience</li>
          <li>To communicate with you about our services</li>
        </ul>

        <h2>4. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at:
          privacy@wayra.example.com
        </p>
      </div>
    </div>
  )
}
