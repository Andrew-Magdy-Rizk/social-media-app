import { BookmarkMinus } from "lucide-react";

export default function Bookmark() {
    return (
        <>

            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Saved Bookmarks</h2>
                    <button className="text-primary text-sm font-semibold hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Bookmark Item 1 */}
                    <div className="group relative bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="aspect-video w-full bg-slate-200 dark:bg-slate-700">
                            <img className="w-full h-full object-cover" data-alt="High tech workspace setup with monitors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDwcOUqPry5-koNq6oP1sPJ3zblaWz36_Vug691-6S4gd37K5EJCSJhdw_5qK2SuvmCtqU1jrXUF2wLWbGXM9AGNW4yKK4OXL9xVfXrdGcPhWeAoz7-XUJwPO1n0trMfyyPh965u0k_BMkV1JxLU9BIeJLcQwibkfC64fVxpAcsO94YhnxLQ90t7H9jiOa_G6G3b2HurErgFnfakM38L3ASnRrUSmHP3BEusdxfSjYgveyMOltFEoLb2g7LHqrpwn-6C-1FW8lQ1Q" />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-sm line-clamp-1">Modern UI Trends 2024</h3>
                            <p className="text-xs text-slate-500 mt-1">Saved 2 days ago</p>
                        </div>
                        <button className="absolute top-2 right-2 size-8 bg-black/40 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <BookmarkMinus />
                        </button>
                    </div>
                    {/* Bookmark Item 2 */}
                    <div className="group relative bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="aspect-video w-full bg-slate-200 dark:bg-slate-700">
                            <img className="w-full h-full object-cover" data-alt="Abstract glass design patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5mIXLH5r1qJo7VJ7MG1Jub7ymzMqcn7QUZK91IgreBFKjgXvTWuBWgcJzsfvB6Aom4e_HXdnwGI07eZ4I3L1L_kAKLS2qZ16CQ_PmX8UCfB3Pa_MyKA3o8muY1jOqcABld3bAThYA7VZHHRwk1jEwBOu_6qAQ91GAco3sn8BsKrTmZas54MC1OWgkm_X9Hnwbt6pXTOQpckDOfV-Ch1gG9hErFqfp6hEwClou6L2cLPZrBBXqsfC2GmYA99pbABjwqvLcB4E_zmE" />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-sm line-clamp-1">Glassmorphism Design Guide</h3>
                            <p className="text-xs text-slate-500 mt-1">Saved 5 days ago</p>
                        </div>
                        <button className="absolute top-2 right-2 size-8 bg-black/40 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <BookmarkMinus />
                        </button>
                    </div>
                    {/* Bookmark Item 3 */}
                    <div className="group relative bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="aspect-video w-full bg-slate-200 dark:bg-slate-700">
                            <img className="w-full h-full object-cover" data-alt="UI design system component library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAMpbx4nXwNHIVEQOrlmecBkvXgN45ceSwri33P5uU_1GTfEgkCsTYdkoLg5-RSRa6p7kBoqI-LBApYAPgooXBIbvqOFwgJjvNFomhwkodV8CcV1F5yTasUxEZocttWHPJtPD5ne4YdMoCq75lUvhfJTzL1bX7Ln787D6cPHh5Hdk8w-Q0FweL2DQWr4ThE2ZLkW7MlfzJSEX8C9eu523ZiKSX5N2Uk01i3slFUSYoS_-8ARcIddPEtBVc5Ib71jQ1foX2hzW_Bpc" />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-sm line-clamp-1">Design Systems 101</h3>
                            <p className="text-xs text-slate-500 mt-1">Saved 1 week ago</p>
                        </div>
                        <button className="absolute top-2 right-2 size-8 bg-black/40 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <BookmarkMinus />
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}
