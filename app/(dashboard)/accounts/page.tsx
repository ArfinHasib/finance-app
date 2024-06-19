'use client';

import { useNewAccount } from '@/features/accounts/hooks/use-new-accounts';
import { useGetAccounts } from '@/features/accounts/api/use-get.accounts';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { columns } from './columns';
import { DataTable } from '@/app/components/data-table';

const AccountsPage = () => {
    const newAccount = useNewAccount();
    const accountsQuery = useGetAccounts();
    const accounts = accountsQuery.data || [];

    return (
        <div className='max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
            <Card className='border-none drop-shadow-sm'>
                <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
                    <CardTitle className='text-xl line-clamp-1'>
                        Accounts Page
                    </CardTitle>
                    <Button size='sm' onClick={newAccount.onOpen}>
                        <Plus className='size-4 mr-2' /> Add New
                    </Button>
                </CardHeader>

                <CardContent>
                    <DataTable
                        filterKey='email'
                        columns={columns}
                        data={accounts}
                        onDelete={() => {}}
                        disabled={false}
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default AccountsPage;
