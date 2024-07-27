import FollowingFeed from "@/components/mainPage/FollowingFeed";
import ForYouFeed from "@/components/mainPage/ForYouFeed";
import TrendsSidebar from "@/components/mainPage/TrendsSidebar";
import PostEditor from "@/components/posts/editor/PostEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        <Tabs defaultValue="for-you">
          <TabsList>
            <TabsTrigger value="for-you">For You</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">
            <FollowingFeed />
          </TabsContent>
        </Tabs>
      </div>
      <TrendsSidebar />
    </main>
  );
}
