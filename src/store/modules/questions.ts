import {defineStore} from "pinia";
import {IQuestions} from '@/store/types/interfaces'

export const useQuestions = defineStore('questions', () => {
  const data: IQuestions[] = [
    {
      key: 'kh4b1jh25j235',
      question: 'How do I open an account with YourBank?',
      answer: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.'
    },
    {
      key: 'ljb3k45bh34',
      question: 'What documents do I need to provide to apply for a loan?',
      answer: 'The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver\'s license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.'
    },
    {
      key: '1l34nj1n34k235',
      question: 'How can I access my accounts online?',
      answer: 'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.'
    },
    {
      key: '1ki253n12n5',
      question: 'Are my transactions and personal information secure?',
      answer: 'At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.'
    },
    {
      key: '2mn5bh3452j',
      question: 'What are the fees associated with a checking account?',
      answer: 'The fees associated with a checking account at YourBank vary depending on the type of account you open. Some accounts have no monthly fees, while others may have maintenance fees or fees for additional services. Please refer to our website or contact our customer service for detailed information on specific account fees.'
    },
    {
      key: '9k23m5n42l5',
      question: 'How can I reset my online banking password?',
      answer: 'To reset your online banking password, go to the "Login" page on our website and click on the "Forgot Password?" link. Follow the instructions provided to reset your password. You will need to provide your username and answer security questions or receive a verification code via email or SMS.'
    },
    {
      key: '3kjh5234j2345',
      question: 'How do I report a lost or stolen debit card?',
      answer: 'If your debit card is lost or stolen, contact our customer service immediately. You can also report it through our mobile app or website by logging into your account and selecting the "Report Lost/Stolen Card" option. We will help you secure your account and issue a replacement card as soon as possible.'
    },
    {
      key: 'mn21342j34l5',
      question: 'What is the maximum withdrawal limit from an ATM?',
      answer: 'The maximum withdrawal limit from an ATM varies depending on your account type and the ATM you use. Generally, the daily limit ranges from $300 to $1,000. For specific information about your account, please refer to your account details or contact our customer support team.'
    },
    {
      key: '8j1234hj2k5l',
      question: 'How do I set up direct deposit?',
      answer: 'To set up direct deposit, you will need to provide your employer or other payers with YourBank\'s routing number and your account number. These details can be found on your checks or in your online banking profile. You may also need to complete a direct deposit form provided by your employer or the payer.'
    },
    {
      key: 'j12342kn3k54',
      question: 'Can I open an account if I am not a US citizen?',
      answer: 'Yes, non-US citizens can open an account with YourBank, provided they have the necessary identification documents, such as a valid passport and proof of address. Additional documentation may be required depending on the account type. Please contact our customer service for specific requirements.'
    },
  ]

  return {
    data
  }
})
