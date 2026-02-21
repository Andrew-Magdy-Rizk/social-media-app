import { Card, Skeleton } from "@heroui/react";


export default function SkeletonPost() {
    return (
        <Card className="space-y-5 p-4" radius="lg">
            <div className="flex items-center gap-3">
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
            <Skeleton className="rounded-lg">
                <div className="h-100 rounded-lg bg-secondary" />
            </Skeleton>
            <div className="space-x-3 flex items-center">
                <Skeleton className="w-20 rounded-full">
                    <div className="h-3 w-full rounded-lg bg-secondary" />
                </Skeleton>
                <Skeleton className="w-20 rounded-full">
                    <div className="h-3 w-full rounded-lg bg-secondary" />
                </Skeleton>
                <Skeleton className="w-20 rounded-full">
                    <div className="h-3 w-full rounded-lg bg-secondary" />
                </Skeleton>
            </div>
        </Card>
    )
}
