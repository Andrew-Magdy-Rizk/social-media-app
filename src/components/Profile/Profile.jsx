import { Camera, LockKeyhole, Pencil, Share2 } from "lucide-react";

export default function Profile() {
  return (
    <>
      {/* Profile Header Section */}
      <div className="relative">
        <div className="h-48 md:h-64 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <img className="w-full h-full object-cover" data-alt="Abstract purple and blue gradient cover image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq8ZTYgvkSEPYXwH-FVwIQnIAsW1MBuZB6k8FHn-i7kibjIk1DwdcqpOmCP5vHAdIubf5ylFn6obt3oDc4yhEqBrbDWPPDEfh9RIdCmm1wyvWh6q3ckoHCa9kBkR-mrZO4IhXA0HuJt1h6WrwcW6-ssoFcKQjvr5Je1ntaKu-4jri8KR2G7Tz4pMBiGtZkaqlGqiYT8vGu9A_K7y1F1EUUM2s2j5rjs7rvbBxDRBNh2aAT-6ASsNz3UJLCfTHxg6z_jUTXHmJjHRM" />
          <button className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-lg backdrop-blur-md transition-all">
            <Pencil size={18} />
          </button>
        </div>
        <div className="px-6 pb-6">
          <div className="relative flex justify-between items-end -mt-16 mb-4">
            <div className="relative group">
              <img className="size-32 md:size-40 rounded-full border-4 border-white dark:border-background-dark shadow-xl object-cover bg-white" data-alt="Alex Rivers circular profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGsgYMo4JGMMtvN1bzAefMabmcMZlAL_Z2w7nuKIS3I8DMj6VJVO_b17AtqI-IaivydCZVWYx9D5tSvfushZyhOZ_9D09o4ZgyZpd_JXWJUGfMwJS4KhFEJ94zcSuXZMLHe1BMQwzfg0YSpTxrKUO_6Hnql--gpxNT3wMZg79fv2dR9x3NKdHNhNkF7mgQsTcoU-gXRr4JgUkdktdpbrH5QOiYZjQXFZPN9X666lKi1BV5eA68d-3KbUopH7CJx874e3PiPoNI8P4" />
              <button className="p-2 absolute bottom-2 right-2 size-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-background-dark hover:scale-105 transition-transform">
                <Camera />
              </button>
            </div>
            <div className="flex gap-2 mb-2">
              <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Edit Profile
              </button>
              <button className="size-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <Share2 />
              </button>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Alex Rivers</h1>
            <p className="text-slate-500 dark:text-slate-400">@arivers</p>
          </div>
          <p className="mt-4 text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
            Digital product designer &amp; tech enthusiast. Exploring the intersection of UI design, minimalist aesthetics, and social connectivity. Building the future of the web. 🚀
          </p>
          <div className="flex gap-6 mt-6">
            <div className="flex gap-1 items-center">
              <span className="font-bold text-lg">1.2k</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">Followers</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="font-bold text-lg">450</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">Following</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="font-bold text-lg">89</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">Posts</span>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs Section  */}
      <div className="sticky top-0 z-2 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 mt-2 px-6">
        <nav className="flex gap-8">
          <button className="py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-semibold transition-all">Posts</button>
          <button className="py-4 border-b-2 border-primary text-primary font-bold transition-all">Bookmarks</button>
          <button className="py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-semibold transition-all">Settings</button>
          <button className="py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-semibold transition-all">Security</button>
        </nav>
      </div>
      <div className="p-6 space-y-10 max-w-5xl">
        {/* Bookmarks Grid Section  */}
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
                <span className="material-symbols-outlined text-base">bookmark_remove</span>
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
                <span className="material-symbols-outlined text-base">bookmark_remove</span>
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
                <span className="material-symbols-outlined text-base">bookmark_remove</span>
              </button>
            </div>
          </div>
        </section>
        {/* Security Section (Change Password) */}
        <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <LockKeyhole />
            </div>
            <div>
              <h2 className="text-xl font-bold">Security &amp; Password</h2>
              <p className="text-sm text-slate-500">Update your account security settings</p>
            </div>
          </div>
          <form className="space-y-4 max-w-md" onsubmit="return false;">
            <div>
              <label className="block text-sm font-semibold mb-1.5">Current Password</label>
              <input className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary px-4 py-2.5" placeholder="••••••••" type="password" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5">New Password</label>
                <input className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary px-4 py-2.5" placeholder="••••••••" type="password" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Confirm Password</label>
                <input className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary px-4 py-2.5" placeholder="••••••••" type="password" />
              </div>
            </div>
            <div className="pt-2">
              <button className="bg-primary text-white font-bold py-2.5 px-6 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Update Password
              </button>
            </div>
          </form>
        </section>
      </div>
    </>


  )
}
