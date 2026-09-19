import React, { useState } from 'react';
import { SITE_CONFIG } from '../../data/site';
import { Mail, MapPin, Send, CheckCircle2, Shield } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    inquiryType: SITE_CONFIG.contact.inquiryTypes[0],
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#D9D3C8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#6F1D2E]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F1D2E]">
              Official Inquiries &amp; Secretariat
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1D1D1B] tracking-tight">
            CONTACT VISIT KAMBATA
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A3528] font-display italic leading-relaxed">
            Direct your ceremonial accreditations, partnership inquiries, and cultural heritage submissions to the organizing secretariat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Organization Credentials & Official Notice (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-7 bg-white border border-[#D9D3C8] rounded-2xl space-y-5 shadow-xs">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08A45]">
                  Organizing Committee
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1D1D1B]">
                  {SITE_CONFIG.organizer}
                </h3>
                <p className="text-xs text-[#6F1D2E] font-medium font-sans">
                  {SITE_CONFIG.organizerMotto}
                </p>
              </div>

              <p className="text-sm text-[#4A3528] leading-relaxed font-sans">
                {SITE_CONFIG.contact.officialNotice}
              </p>

              <div className="space-y-3 pt-3 border-t border-[#D9D3C8]/70 text-xs text-[#1D1D1B]/85 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#6F1D2E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1D1D1B]">Ceremonial Jurisdiction:</span>
                    <span>{SITE_CONFIG.contact.locationNote}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#536B55] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1D1D1B]">Official Secretariat Channel:</span>
                    <span className="italic text-[#4A3528]">
                      Visit Kambata Tour &amp; Event Organization Official Registry
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-[#B08A45] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1D1D1B]">Dossier Submission:</span>
                    <span>Direct submission via committee representatives and festival secretariat</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on data privacy */}
            <div className="p-4 bg-[#E9E3D8]/40 border border-[#D9D3C8] rounded-xl text-xs text-[#4A3528] font-sans">
              <span className="font-semibold text-[#1D1D1B] block mb-0.5">Official Protocol:</span>
              <span>All nomination materials, supporting evidence, and media credentials are held strictly confidential by the Masala Award Committee.</span>
            </div>
          </div>

          {/* Right: Official Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 bg-white border border-[#D9D3C8] rounded-2xl shadow-xs text-left">
              
              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#536B55]/10 text-[#536B55] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1D1D1B]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#4A3528] max-w-md mx-auto font-sans">
                    Thank you, {formData.name}. Your inquiry regarding “{formData.inquiryType}” has been registered with the Visit Kambata Tour &amp; Event Organization secretariat.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        organization: '',
                        inquiryType: SITE_CONFIG.contact.inquiryTypes[0],
                        message: '',
                      });
                    }}
                    className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#6F1D2E] border border-[#6F1D2E] rounded-md hover:bg-[#6F1D2E] hover:text-white transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#D9D3C8]/70 pb-3">
                    <h3 className="font-serif text-2xl font-semibold text-[#1D1D1B]">
                      Official Secretariat Inquiry Form
                    </h3>
                    <p className="text-xs text-[#4A3528] mt-1 font-sans">
                      Please provide your details to connect with the Visit Kambata Tour &amp; Event team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-[#1D1D1B]">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#D9D3C8] rounded-md text-sm text-[#1D1D1B] focus:outline-none focus:ring-2 focus:ring-[#6F1D2E]/50 focus:border-[#6F1D2E]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-org" className="text-xs font-bold uppercase tracking-wider text-[#1D1D1B]">
                        Organization / Affiliation
                      </label>
                      <input
                        id="contact-org"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Organization or community group"
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#D9D3C8] rounded-md text-sm text-[#1D1D1B] focus:outline-none focus:ring-2 focus:ring-[#6F1D2E]/50 focus:border-[#6F1D2E]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-inquiry-type" className="text-xs font-bold uppercase tracking-wider text-[#1D1D1B]">
                      Inquiry Subject / Category *
                    </label>
                    <select
                      id="contact-inquiry-type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#D9D3C8] rounded-md text-sm text-[#1D1D1B] focus:outline-none focus:ring-2 focus:ring-[#6F1D2E]/50 focus:border-[#6F1D2E]"
                    >
                      {SITE_CONFIG.contact.inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-[#1D1D1B]">
                      Message / Inquiry Details *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your inquiry, event accreditation request, or community question..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#D9D3C8] rounded-md text-sm text-[#1D1D1B] focus:outline-none focus:ring-2 focus:ring-[#6F1D2E]/50 focus:border-[#6F1D2E]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#6F1D2E] hover:bg-[#581523] rounded-md transition-colors shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry to Secretariat</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
