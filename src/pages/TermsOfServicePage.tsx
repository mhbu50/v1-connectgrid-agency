import { Seo } from '@/components/shared/Seo';
import { LegalPageLayout } from '@/components/shared/LegalPageLayout';
export function TermsOfServicePage() {
  return (
    <>
      <Seo
        title="Terms of Service | ConnectGrid"
        description="Read the Terms of Service for using the ConnectGrid website and engaging with our digital marketing services."
        canonical="https://connectgrid.com/terms-of-service"
      />
      <LegalPageLayout title="Terms of Service">
        <h2>1. Agreement to Terms</h2>
        <p>By using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
        <h2>2. Intellectual Property Rights</h2>
        <p>The Site and its original content, features, and functionality are owned by ConnectGrid and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        <h2>3. User Representations</h2>
        <p>By using the Site, you represent and warrant that:</p>
        <ul>
          <li>All registration information you submit will be true, accurate, current, and complete.</li>
          <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
          <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
        </ul>
        <h2>4. Prohibited Activities</h2>
        <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
        <h2>5. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of Saudi Arabia, without regard to its conflict of law provisions.</p>
        <h2>6. Contact Us</h2>
        <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: contact@connect-grid.com</p>
      </LegalPageLayout>
    </>
  );
}