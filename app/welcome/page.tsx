import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, FileText, Calendar, CheckCircle } from "lucide-react";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-background">

      {/* Success Hero */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white text-secondary rounded-full w-24 h-24 flex items-center justify-center">
              <CheckCircle className="w-16 h-16" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-4">Welcome to Direct Care Indy!</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Your enrollment is complete. Get ready to experience healthcare the way it should be.
          </p>
        </div>
      </section>

      {/* Onboarding Roadmap */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Your 3-Step Onboarding Journey
            </h3>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Follow these simple steps to get started with your new healthcare experience
            </p>

            {/* Step 1: The Secure Connection */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6 border-l-4 border-secondary">
              <div className="flex items-start gap-6">
                <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-2xl font-bold text-primary">Step 1: The Secure Connection</h4>
                    <span className="bg-secondary text-white text-sm px-3 py-1 rounded-full font-semibold">
                      Do this first
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    Download Spruce Health to text Dr. Pike directly
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800 font-semibold mb-2">📱 How to get started:</p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Download &quot;Spruce Health&quot; from your app store (iOS or Android)</li>
                      <li>Create your account using the email you provided during enrollment</li>
                      <li>Search for &quot;Direct Care Indy&quot; or &quot;Dr. James Pike&quot;</li>
                      <li>Send your first message to introduce yourself</li>
                    </ol>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    💡 Tip: This is your direct line to Dr. Pike. Use it for quick questions, appointment requests,
                    or urgent concerns. Response times are typically under 1 hour during business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: The Medical History */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6 border-l-4 border-primary">
              <div className="flex items-start gap-6">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center shrink-0">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-primary mb-3">Step 2: The Medical History</h4>
                  <p className="text-gray-700 text-lg mb-4">
                    Check your email for our comprehensive health intake form
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800 font-semibold mb-2">📧 What to expect:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>You&apos;ll receive a secure link to your health intake form within 24 hours</li>
                      <li>Complete it at your own pace—it takes about 15-20 minutes</li>
                      <li>Include current medications, allergies, past surgeries, and family history</li>
                      <li>Your thoroughness helps Dr. Pike provide the best possible care</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    💡 Tip: Have your medication bottles handy when filling out the form.
                    Don&apos;t worry if you can&apos;t remember everything—we&apos;ll review it together at your first visit.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: The First Visit */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-6">
                <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shrink-0">
                  <Calendar className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-primary mb-3">Step 3: The First Visit</h4>
                  <p className="text-gray-700 text-lg mb-4">
                    Schedule your 60-minute &quot;Meet & Greet&quot; at our Michigan Road office
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800 font-semibold mb-2">📅 Your first appointment:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Schedule via Spruce Health or call (317) 956-6288</li>
                      <li>Allow 60 minutes for this comprehensive visit</li>
                      <li>Dr. Pike will review your complete medical history</li>
                      <li>Discuss your health goals and any current concerns</li>
                      <li>Get to know how Direct Care works in practice</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-1">📍 Office Location:</p>
                    <p className="text-gray-700">
                      7911 N. Michigan Rd.<br />
                      Indianapolis, IN 46268
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Free parking available. Located on Michigan Road between 79th and 82nd Streets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              What Happens Next?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Within 1 hour:</p>
                  <p className="text-gray-700">You&apos;ll receive a confirmation email with your enrollment details and next steps.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Within 24 hours:</p>
                  <p className="text-gray-700">You&apos;ll receive your secure health intake form and instructions for Spruce Health.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Before your billing date:</p>
                  <p className="text-gray-700">You&apos;ll receive payment setup instructions for automatic monthly billing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Questions? We&apos;re Here to Help
            </h3>
            <p className="text-gray-700 mb-8">
              Our team is ready to assist you with any questions about your new membership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13179566288"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (317) 956-6288
              </a>
              <Link
                href="/what-is-dpc#faq"
                className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-flex items-center justify-center gap-2"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Direct Care Indy</h4>
              <p className="text-gray-300">
                Direct Primary Care for Indianapolis families
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/what-is-dpc#faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  <span>7911 N. Michigan Rd.<br />Indianapolis, IN 46268</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 shrink-0" />
                  <a href="tel:+13179566288" className="hover:text-white transition-colors">
                    (317) 956-6288
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 shrink-0" />
                  <a href="mailto:info@directcareindy.com" className="hover:text-white transition-colors">
                    info@directcareindy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center text-gray-300">
            <p className="font-semibold mb-2">Notice: Direct Care Indy is not insurance.</p>
            <p>James D. Pike, D.O., FCCP, FACP | Direct Primary Care Physician</p>
            <p className="text-sm opacity-90 mt-1">Board Certified in Pulmonary and Internal Medicine</p>
            <p className="mt-2">© {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
