export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-light mb-8">Terms of Service</h1>
      <div className="prose prose-sm">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Wayra. These terms and conditions outline the rules and regulations for the use of our website and
          services.
        </p>

        <h2>2. License to Use</h2>
        <p>
          Unless otherwise stated, Wayra and/or its licensors own the intellectual property rights for all material on
          Wayra. All intellectual property rights are reserved.
        </p>

        <h2>3. Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>Publishing any website material in any other media</li>
          <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
          <li>Using this website in any way that is or may be damaging to this website</li>
          <li>Using this website in any way that impacts user access to this website</li>
        </ul>

        <h2>4. Disclaimer</h2>
        <p>
          Wayra is an experimental tool. The information provided by Wayra is for general informational purposes only.
          All information on the site is provided in good faith, however we make no representation or warranty of any
          kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or
          completeness of any information on the site.
        </p>

        <h2>5. Contact Us</h2>
        <p>If you have any questions about these Terms of Service, please contact us at: terms@wayra.example.com</p>
      </div>
    </div>
  )
}
