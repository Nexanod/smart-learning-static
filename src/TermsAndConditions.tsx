import LegalPageLayout from '@/components/LegalPageLayout';

export default function TermsAndConditions() {
  return (
    <LegalPageLayout label='LEGAL' title='Terms and Conditions'>
      <p className='text-stone-600'>
        Last updated: February 2026. Please read these Terms and Conditions (&quot;Terms&quot;) carefully before using the Smart Learning platform and related services operated by Smart Learning Systems.
      </p>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          1. Acceptance of Terms
        </h2>
        <p className='text-stone-600 mb-4'>
          By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you are using the services on behalf of an institution, you represent that you have authority to bind that entity.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          2. Use of the Service
        </h2>
        <p className='text-stone-600 mb-4'>
          You agree to use the platform only for lawful purposes and in accordance with these Terms. You must not misuse the service, attempt to gain unauthorized access, interfere with other users, or use the platform in any way that could harm us or third parties. You are responsible for maintaining the confidentiality of your account credentials.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          3. Intellectual Property
        </h2>
        <p className='text-stone-600 mb-4'>
          All intellectual property rights in the platform, including software, design, and content (excluding content you upload), remain with Smart Learning Systems. You are granted a limited, non-exclusive, non-transferable license to use the service for your internal institutional use during the subscription term.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          4. Payment & Subscription
        </h2>
        <p className='text-stone-600 mb-4'>
          Subscription fees are as per the plan selected and are billed in advance. Failure to pay may result in suspension or termination of access. Price changes will be communicated in advance and will apply at the next renewal unless you cancel.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          5. Limitation of Liability
        </h2>
        <p className='text-stone-600 mb-4'>
          To the maximum extent permitted by law, Smart Learning Systems shall not be liable for any indirect, incidental, special, or consequential damages, or for loss of data or profits arising from your use of the service. Our total liability shall not exceed the fees paid by you in the twelve months preceding the claim.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          6. Termination
        </h2>
        <p className='text-stone-600 mb-4'>
          We may suspend or terminate your access for breach of these Terms or for any other reason with notice where required. You may cancel your subscription in accordance with your plan. Upon termination, your right to use the service ceases and we may delete your data after a reasonable retention period.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          7. Contact
        </h2>
        <p className='text-stone-600'>
          For questions about these Terms, contact us at{' '}
          <a href='mailto:sales@smartlearning.pk' className='text-[#cc5500] hover:underline'>
            sales@smartlearning.pk
          </a>
          .
        </p>
      </div>
    </LegalPageLayout>
  );
}
