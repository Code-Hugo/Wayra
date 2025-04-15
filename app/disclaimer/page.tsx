export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-light mb-8">Disclaimer</h1>
      <div className="prose prose-sm">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Experimental Tool</h2>
        <p>
          Wayra is an experimental tool designed to provide hotel recommendations based on user input. The suggestions
          provided by Wayra may not reflect live pricing or availability. We do not guarantee the accuracy,
          completeness, or reliability of any recommendations or information provided.
        </p>

        <h2>No Booking Services</h2>
        <p>
          Wayra does not provide direct booking services. Any "Book" buttons or similar calls to action are for
          demonstration purposes only and do not represent actual booking capabilities. To book a hotel, users should
          visit the hotel's official website or use a verified booking platform.
        </p>

        <h2>AI-Generated Content</h2>
        <p>
          The hotel recommendations and descriptions provided by Wayra are generated using artificial intelligence.
          While we strive for accuracy, AI-generated content may contain errors or inconsistencies. Users should verify
          all information before making travel decisions.
        </p>

        <h2>No Liability</h2>
        <p>
          Wayra and its creators assume no responsibility or liability for any errors, omissions, or inaccuracies in the
          information provided. Users rely on Wayra's recommendations at their own risk. We are not liable for any
          losses, damages, or inconveniences that may arise from using our service.
        </p>

        <h2>Contact</h2>
        <p>If you have any questions about this disclaimer, please contact us at: legal@wayra.example.com</p>
      </div>
    </div>
  )
}
