import { MediaBlock } from "../blocks/media-block/component";
import type {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  DefaultTypedEditorState,
} from "@payloadcms/richtext-lexical";
import {
  type JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from "@payloadcms/richtext-lexical/react";

import { CodeBlock, type CodeBlockProps } from "../blocks/code/component";

import type {
  BannerBlock as BannerBlockProps,
  MediaBlock as MediaBlockProps,
} from "@/payload-types";
import { BannerBlock } from "../blocks/banner/component";
import { cn } from "@/lib/utils/cn";

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<MediaBlockProps | BannerBlockProps | CodeBlockProps>;

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const { value, relationTo } = linkNode.fields.doc!;
  if (typeof value !== "object") {
    throw new Error("Expected value to be an object");
  }
  const slug = value.slug;
  return relationTo === "posts" ? `/posts/${slug}` : `/${slug}`;
};

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    banner: ({ node }) => (
      <BannerBlock className="col-start-2 mb-4" {...node.fields} />
    ),
    mediaBlock: ({ node }) => (
      <MediaBlock
        className="col-start-1 col-span-3"
        imgClassName="m-0"
        {...node.fields}
        captionClassName="mx-auto max-w-[48rem]"
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),
    code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
  },
});

type Props = {
  data: DefaultTypedEditorState;
  enableGutter?: boolean;
  enableProse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props;
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn(
        "payload-richtext",
        {
          container: enableGutter,
          "max-w-none": !enableGutter,
          "mx-auto prose md:prose-md dark:prose-invert": enableProse,
        },
        className,
      )}
      {...rest}
    />
  );
}
