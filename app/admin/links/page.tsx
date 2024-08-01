"use client";

import { useState } from "react";
import axios from "axios";
import Input from "@/components/ui/input";
import toast from "@/utils/toast";
import Button from "@/components/ui/button";

type Link = {
  url: string;
  key?: string;
  comments?: string;
};

const defaultLink: Link = { url: "", key: "", comments: "" };

export default function LinksPage() {
  const [link, setLink] = useState<Link>(defaultLink);
  const [links, setLinks] = useState<Link[]>([]);
  const [generatedLinks, setGeneratedLinks] = useState<Link[]>([]);

  async function handleCreateLinks(e: React.FormEvent) {
    e.preventDefault();

    if (links.length === 0 && !link.url) {
      setLink(defaultLink);
      return toast("No links to create", "error");
    }

    toast("Creating link...", "info");

    await axios
      .post("/api/links", [...links, link])
      .then((response) => {
        setGeneratedLinks([...links, response.data]);

        setLink(defaultLink);
        setLinks([]);

        toast("Links created", "success");
      })
      .catch(() => {
        toast("Error creating link", "error");
      });
  }

  function handleAddAnother() {
    setLinks([...links, link]);
    setLink({ url: "", key: "", comments: "" });
  }

  return (
    <>
      <h1 className="text-3xl font-medium">Links</h1>
      <form onSubmit={handleCreateLinks}>
        <div className="py-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <Input
              label="Link"
              placeholder="https://example.com"
              type="text"
              value={link.url}
              handleChange={(e) =>
                setLink({
                  url: e.target.value,
                  key: link.key,
                  comments: link.comments,
                })
              }
            />

            <Input
              type="text"
              label="Slug"
              placeholder="slug"
              value={link.key}
              handleChange={(e) =>
                setLink({
                  url: link.url,
                  key: e.target.value,
                  comments: link.comments,
                })
              }
            />
          </div>

          {links.map((link, index) => (
            <div className="flex gap-2 py-4" key={index}>
              <Input disabled type="text" value={links[index].url} />

              <Input disabled type="text" value={links[index].key} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <Button
            className="btn-contrast"
            type="button"
            handleClick={handleAddAnother}
          >
            Add Another
          </Button>

          <Button type="submit">Create Link</Button>
        </div>
      </form>

      <div>
        {links.map((link, index) => (
          <div key={index}>{link?.url}</div>
        ))}
      </div>
    </>
  );
}
