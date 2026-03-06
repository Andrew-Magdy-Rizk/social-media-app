import { Button } from "@heroui/react";
import { Check, RotateCw, WifiOff } from "lucide-react";


export default function OfflinePage() {

    const handelRefresh = () => {
        window.location.reload();
    };


    return (
        < main className="flex flex-1 items-center justify-center p-6" >
            <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-12 flex flex-col items-center text-center">
                {/* Illustration Section */}
                <div className="relative mb-10">
                    <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl" />
                    <div className="relative flex h-48 w-48 items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-full border-4 border-white dark:border-slate-700 shadow-sm">
                        <WifiOff size={70} className="text-primary font-bold" />
                    </div>
                    {/* Small status indicator */}
                    <div className="absolute bottom-4 right-4 h-6 w-6 rounded-full bg-orange-400 border-4 border-white dark:border-slate-900" />
                </div>
                {/* Text Content */}
                <div className="max-w-md space-y-4">
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">You're Offline</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                        It looks like your internet connection was lost. We'll keep trying to reconnect you automatically, or you can try to refresh.
                    </p>
                </div>
                {/* Action Button */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button onPress={handelRefresh} className="flex min-w-40 items-center justify-center gap-2 rounded-lg h-12 px-8 bg-primary text-white font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20">
                        <RotateCw size={18} />
                        Retry Connection
                    </Button>
                </div>
                {/* Tips Section */}
                <div className="mt-16 w-full max-w-md border-t border-slate-100 dark:border-slate-800 pt-8">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">Troubleshooting Tips</h3>
                    <div className="grid gap-4 text-left">
                        <div className="flex items-start gap-3 group">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Check size={14}/>
                            </div>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Ensure Wi-Fi or mobile data is turned on</p>
                        </div>
                        <div className="flex items-start gap-3 group">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Check size={14}/>
                            </div>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Check your router or modem cables</p>
                        </div>
                        <div className="flex items-start gap-3 group">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Check size={14}/>
                            </div>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Try restarting your browser or computer</p>
                        </div>
                    </div>
                </div>
            </div>
        </main >

    )
}
