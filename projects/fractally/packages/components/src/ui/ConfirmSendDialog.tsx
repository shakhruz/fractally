import React from "react";
import { Card } from "../ui/Card";
import { Avatar } from "../ui/Avatar";
import Button from "../ui/Button";

interface SDFieldProps {
    children: React.ReactNode[];
    avatar?: {
        url?: string;
        name?: string;
    };
}

const CSDField = ({ children, avatar }: SDFieldProps) => {
    return (
        <div className="flex gap-1 px-2 py-1 mb-4 bg-slate-50">
            {avatar && (
                <div className="flex-none m-1">
                    <Avatar
                        avatarUrl={avatar.url}
                        name="Rey"
                        size="lg"
                        shape="hex"
                    />
                </div>
            )}
            <div className="flex-auto content-center mx-1 my-auto">
                <div className={`contentLen-${children.length} text-sm`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

const ConfirmSendDialog = () => {
    const avatarFrom = {};
    const avatarTo = {
        url: "https://randomuser.me/api/portraits/women/44.jpg",
    };
    return (
        <div className="bg-gray-100 w-full h-full p-4 space-y-4">
            <Card>
                <div className="my-0 mx-2">
                    <h3 className="mb-6 mx-auto font-bold text-center">
                        Confirm send
                    </h3>
                    <CSDField avatar={avatarFrom}>
                        <label className="text-slate-400">Send</label>
                        <div className="font-bold">
                            230.5 PRIME / {"\u20BF"} 230.5
                        </div>
                        <br />
                        <label className="text-slate-400">Trx fee</label>
                        <div>.001 PRIME / 0.000011</div>
                    </CSDField>
                    <CSDField avatar={avatarTo}>
                        <label className="text-slate-400">To</label>
                        <div>Hal McGovern</div>
                        <br />
                        <label className="text-slate-400">Memo</label>
                        <div>For your perfectly roasted coffee.</div>
                    </CSDField>
                    <div className="flex gap-2 mt-8">
                        <Button type="neutral" fullWidth size="lg">
                            Back
                        </Button>
                        <Button type="primary" fullWidth size="lg">
                            Approve
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ConfirmSendDialog;
