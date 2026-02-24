import LegalPageLayout from '@/components/LegalPageLayout';

export default function RefundPolicy() {
  return (
    <LegalPageLayout label='LEGAL' title='Refund Policy'>
      <p className='text-stone-600'>
        Last updated: February 2026. Smart Learning Systems aims to ensure your satisfaction with our platform. This policy outlines the circumstances under which refunds may be requested and processed.
      </p>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          1. Eligibility for Refunds
        </h2>
        <p className='text-stone-600 mb-4'>
          Refund requests may be considered within 14 days of the initial payment for annual or multi-month subscriptions, provided that the service has not been used substantially (e.g. no bulk data import or heavy usage). Refunds for monthly plans may be evaluated on a case-by-case basis within 7 days of payment.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          2. Non-Refundable Items
        </h2>
        <p className='text-stone-600 mb-4'>
          Fees for add-ons (e.g. extra SMS/WhatsApp credits, one-time setup or migration fees) are generally non-refundable once the service has been delivered. Custom development or professional services are non-refundable after work has commenced.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          3. How to Request a Refund
        </h2>
        <p className='text-stone-600 mb-4'>
          Send a refund request to{' '}
          <a href='mailto:sales@smartlearning.pk' className='text-[#cc5500] hover:underline'>
            sales@smartlearning.pk
          </a>
          {' '}with your account details, invoice reference, and reason for the request. We will respond within 5 business days and, if approved, process the refund to the original payment method within 10 business days.
        </p>
      </div>

      <div>
        <h2 className='font-display text-2xl font-bold text-stone-900 mt-10 mb-4'>
          4. Disputes
        </h2>
        <p className='text-stone-600'>
          If you are not satisfied with our decision, you may contact us to discuss. Our Terms and Conditions govern any disputes related to payments and refunds.
        </p>
      </div>
    </LegalPageLayout>
  );
}
