import LegalPageLayout from '@/components/LegalPageLayout';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout label='LEGAL' title='Privacy Policy'>
      <p className='text-stone-600'>
        Last updated: February 2026. Smart Learning Systems (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy describes how we collect, use, and safeguard your information when you use our platform and services.
      </p>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          1. Information We Collect
        </h2>
        <p className='text-stone-600 mb-4'>
          We collect information you provide directly (e.g. account details, institution name, contact information), usage data (e.g. feature usage, logs), and technical data (e.g. IP address, device type, browser) necessary to operate and improve our services.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          2. How We Use Your Information
        </h2>
        <p className='text-stone-600 mb-4'>
          We use collected information to deliver, maintain, and improve our services; to communicate with you; to ensure security and prevent fraud; and to comply with legal obligations. We do not sell your personal information to third parties.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          3. Data Retention & Security
        </h2>
        <p className='text-stone-600 mb-4'>
          We retain your data only as long as necessary to fulfill the purposes described in this policy or as required by law. We implement industry-standard security measures, including encryption and access controls, to protect your data.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          4. Your Rights
        </h2>
        <p className='text-stone-600 mb-4'>
          Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data, and to object to or restrict certain processing. Contact us at the details below to exercise these rights.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          5. Contact
        </h2>
        <p className='text-stone-600'>
          For privacy-related questions or requests, contact us at{' '}
          <a href='mailto:sales@smartlearning.pk' className='text-[#cc5500] hover:underline'>
            sales@smartlearning.pk
          </a>
          .
        </p>
      </div>
    </LegalPageLayout>
  );
}
