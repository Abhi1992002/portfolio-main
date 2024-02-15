import React, { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

type ScreenShotsProps = {};

export const ScreenShots = ({}: ScreenShotsProps) => {
  return (
    <div className="w-full h-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full h-full rounded-lg border-none"
      >
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-2">
                <div className="w-full h-full rounded-lg bg-white"></div>
              </div>
            </ResizablePanel>
            <ResizableHandle className="bg-tranparent" />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-2">
                <div className="w-full h-full rounded-lg bg-white"></div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle className="bg-tranparent" />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-2">
                <div className="w-full h-full rounded-lg bg-white"></div>
              </div>
            </ResizablePanel>
            <ResizableHandle className="bg-tranparent" />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-2">
                <div className="w-full h-full rounded-lg bg-white"></div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
