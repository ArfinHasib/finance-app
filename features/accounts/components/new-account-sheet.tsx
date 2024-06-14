import { z } from 'zod';
import { useNewAccount } from '../hooks/use-new-accounts';
import { AccountForm } from './account-form';
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
} from '@/components/ui/sheet';
import { inserertAccountSchema } from '@/db/schema';

const formSchema = inserertAccountSchema.pick({
   name: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewAccountSheet = () => {
   const { isOpen, onClose } = useNewAccount();

   const onSubmit = (values: FormValues) => {
      console.log(values);
   };

   return (
      <Sheet open={isOpen} onOpenChange={onClose}>
         <SheetContent className='space-y-4'>
            <SheetHeader>
               <SheetTitle>New Account</SheetTitle>
               <SheetDescription>
                  Create a new account to track your transactions.
               </SheetDescription>
            </SheetHeader>
            <AccountForm
               onSubmit={onSubmit}
               disabled={false}
               defaultValues={{
                  name: '',
               }}
            />
         </SheetContent>
      </Sheet>
   );
};
