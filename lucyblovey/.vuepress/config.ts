import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "悦兮小栈",
  description: "发现文字的温度，感知光影的斑驳，体会生活的味道，编织那个属于你的故事◕‿◕一个性化的人文平台 ，彼此休憩在这宁静的世界，与友徜徉",

  base: "/",

  theme,
});
