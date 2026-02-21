import { Skeleton } from "@heroui/react";

export default function SkeletonComment() {
    return (
        <div className="p-4 md:p-6 flex gap-4">
            <Skeleton className="rounded-full">
                <div className="h-10 w-10" />
            </Skeleton>
            <div className="space-y-2 w-full">
                <Skeleton className="rounded-full w-20" >
                    <div className="rounded-full h-3" />
                </Skeleton>
                <Skeleton className="rounded-full w-40">
                    <div className="rounded-full h-3" />
                </Skeleton>
            </div>
        </div>
    )
}
