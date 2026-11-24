"use client";

import gsap, { useGSAP, ScrollTrigger } from "@/client/libs/gsap";
import { RefObject, useRef, useState } from "react";

type Options = {
  itemSelector?: string;
  initialIndex?: number | null;
  start?: string;
  end?: string;
  pinLast?: boolean;
  duration?: number;
  ease?: string;
  markers?: boolean;
};

export function useStackedScrollNav(
  scope: RefObject<HTMLElement | null>,
  {
    itemSelector = ".card",
    initialIndex = null,
    start = "top top",
    end = "bottom top",
    pinLast = false,
    duration = 1,
    ease = "power2.inOut",
    markers = false,
  }: Options = {},
) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const isAutoScrolling = useRef(false);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const {} = useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(itemSelector);
      const lastIndex = items.length - 1;

      triggersRef.current = items.map((item, index) =>
        ScrollTrigger.create({
          trigger: item,
          start,
          end,
          pin: pinLast || index !== lastIndex,
          pinSpacing: false,
          markers,
          onEnter: () => {
            if (!isAutoScrolling.current) setActiveIndex(index);
          },
          onEnterBack: () => {
            if (!isAutoScrolling.current) setActiveIndex(index);
          },
        }),
      );

      return () => {
        tweenRef.current?.kill();
        tweenRef.current = null;
        triggersRef.current = [];
        isAutoScrolling.current = false;
      };
    },
    {
      scope,
      dependencies: [itemSelector, start, end, pinLast, markers],
      revertOnUpdate: true,
    },
  );

  const scrollToIndex = (index: number) => {
    const st = triggersRef.current[index];
    if (!st) return;

    isAutoScrolling.current = true;
    setActiveIndex(index);

    tweenRef.current?.kill();
    tweenRef.current = gsap.to(window, {
      scrollTo: st.start + 1,
      duration,
      ease,
      overwrite: "auto",
      onComplete: () => {
        isAutoScrolling.current = false;
      },
      onInterrupt: () => {
        isAutoScrolling.current = false;
      },
    });
  };

  return { activeIndex, scrollToIndex };
}
