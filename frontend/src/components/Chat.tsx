import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Chat() {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState("");

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-4">
            {/* Message display area */}
            <div className="min-h-[200px] border rounded p-2 overflow-y-auto space-y-2">
                {messages.length === 0 ? (
                    <p className="text-sm text-gray-500">Messages will appear here</p>
                ) : (
                    messages.map((msg, i) => (
                        <p key={i} className="text-sm text-gray-800">
                            {msg}
                        </p>
                    ))
                )}
            </div>

            {/* Input + Send */}
            <div className="flex gap-2">
                <Input
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            setMessages([...messages, `You: ${input}`]);
                            setInput("");
                        }
                    }}
                />
                <Button
                    onClick={() => {
                        if (input.trim()) {
                            setMessages([...messages, `You: ${input}`]);
                            setInput("");
                        }
                    }}
                >
                    Send
                </Button>
            </div>
        </div>
    );
}
