"use client";

import { useState } from "react";
import {
	Bold,
	Italic,
	Mail,
	Plus,
	Search,
	Settings,
	Underline,
	User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/components/ui/toggle-group";

export function ComponentDemo() {
	const [notifications, setNotifications] = useState(true);
	const [activeSlider, setActiveSlider] = useState(40);

	return (
		<div className="mx-auto flex max-w-5xl flex-col gap-6">
			<header className="flex flex-col gap-1">
				<h2 className="text-2xl font-semibold tracking-tight">
					Shadcn UI Components
				</h2>
				<p className="text-sm text-muted-foreground">
					A showcase of the shadcn/ui components available in this project.
				</p>
			</header>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Buttons</CardTitle>
						<CardDescription>
							Variants, sizes, and icons.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<div className="flex flex-wrap items-center gap-2">
							<Button>Default</Button>
							<Button variant="secondary">Secondary</Button>
							<Button variant="outline">Outline</Button>
							<Button variant="ghost">Ghost</Button>
							<Button variant="destructive">Destructive</Button>
							<Button variant="link">Link</Button>
						</div>
						<div className="flex flex-wrap items-center gap-2">
							<Button size="sm">Small</Button>
							<Button size="default">Default</Button>
							<Button size="lg">Large</Button>
							<Button size="icon" aria-label="Settings">
								<Settings />
							</Button>
							<Button>
								<Plus />
								Add item
							</Button>
						</div>
						<div className="flex flex-wrap items-center gap-2">
							<Button disabled>Disabled</Button>
							<Button variant="outline" disabled>
								Disabled outline
							</Button>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Button Group &amp; Badges</CardTitle>
						<CardDescription>
							Segmented controls and status indicators.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<div className="flex flex-wrap items-center gap-2">
							<ButtonGroup>
								<Button>Undo</Button>
								<Button>Redo</Button>
								<Button>Reset</Button>
							</ButtonGroup>
						</div>
						<div className="flex flex-wrap items-center gap-2">
							<Select name="filter" defaultValue="all">
								<ButtonGroup>
									<ButtonGroupText>Filter</ButtonGroupText>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
									<Button>Apply</Button>
								</ButtonGroup>
								<SelectContent>
									<SelectItem value="all">All</SelectItem>
									<SelectItem value="recent">Recent</SelectItem>
									<SelectItem value="drafts">Drafts</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="flex flex-wrap items-center gap-2">
							<Badge>Default</Badge>
							<Badge variant="secondary">Secondary</Badge>
							<Badge variant="outline">Outline</Badge>
							<Badge variant="destructive">Destructive</Badge>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Toggles</CardTitle>
						<CardDescription>
							Single toggles and toggle groups.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<div className="flex flex-wrap items-center gap-2">
							<Toggle aria-label="Toggle bold">
								<Bold />
							</Toggle>
							<Toggle variant="outline" defaultPressed>
								<Underline />
							</Toggle>
							<Toggle disabled aria-label="Toggle settings">
								<Settings />
							</Toggle>
						</div>
						<Separator />
						<div className="flex flex-col gap-3">
							<p className="text-sm text-muted-foreground">
								Multiple selection
							</p>
							<ToggleGroup defaultValue={["bold"]}>
								<ToggleGroupItem value="bold" aria-label="Toggle bold">
									<Bold />
								</ToggleGroupItem>
								<ToggleGroupItem value="italic" aria-label="Toggle italic">
									<Italic />
								</ToggleGroupItem>
								<ToggleGroupItem value="underline" aria-label="Toggle underline">
									<Underline />
								</ToggleGroupItem>
							</ToggleGroup>
						</div>
						<div className="flex flex-col gap-3">
							<p className="text-sm text-muted-foreground">
								Outline variant
							</p>
							<ToggleGroup variant="outline" defaultValue={["day"]}>
								<ToggleGroupItem value="day">Day</ToggleGroupItem>
								<ToggleGroupItem value="week">Week</ToggleGroupItem>
								<ToggleGroupItem value="month">Month</ToggleGroupItem>
							</ToggleGroup>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Form Controls</CardTitle>
						<CardDescription>
							Inputs, selects, checkboxes, radio groups, and more.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<div className="grid gap-1.5">
							<Label htmlFor="email">Email</Label>
							<div className="relative">
								<Mail className="pointer-events-none absolute top-1/2 left-2.5 z-10 size-4 -translate-y-1/2 text-muted-foreground" />
								<Input
									id="email"
									type="email"
									placeholder="you@example.com"
									className="pl-8"
								/>
							</div>
						</div>
						<div className="grid gap-1.5">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								placeholder="Write a message…"
								rows={3}
							/>
						</div>
						<div className="grid grid-cols-[auto_1fr] items-center gap-2">
							<Checkbox id="terms" defaultChecked />
							<Label htmlFor="terms">Accept the terms and conditions</Label>
						</div>
						<RadioGroup name="plan" defaultValue="standard">
							<div className="grid grid-cols-[auto_1fr] items-center gap-2">
								<RadioGroupItem value="free" id="plan-free" />
								<Label htmlFor="plan-free">Free plan</Label>
							</div>
							<div className="grid grid-cols-[auto_1fr] items-center gap-2">
								<RadioGroupItem value="standard" id="plan-standard" />
								<Label htmlFor="plan-standard">Standard plan</Label>
							</div>
						</RadioGroup>
						<Separator />
						<div className="grid grid-cols-[auto_1fr] items-center gap-2">
							<Switch
								id="notifications"
								checked={notifications}
								onCheckedChange={setNotifications}
							/>
							<Label htmlFor="notifications">
								Email notifications
							</Label>
						</div>
						<div className="grid gap-1.5">
							<Label htmlFor="slider">Volume ({activeSlider})</Label>
							<Slider
								id="slider"
								value={[activeSlider]}
								onValueChange={(values) =>
									setActiveSlider(
										Array.isArray(values) ? values[0] : values
									)
								}
							/>
						</div>
						<div className="flex justify-end">
							<Button>
								<User />
								Submit
							</Button>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Tabs</CardTitle>
						<CardDescription>
							Tabbed content navigation.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue="account">
							<TabsList>
								<TabsTrigger value="account">Account</TabsTrigger>
								<TabsTrigger value="billing">Billing</TabsTrigger>
								<TabsTrigger value="settings">Settings</TabsTrigger>
							</TabsList>
							<TabsContent value="account" className="pt-3">
								<p className="text-sm text-muted-foreground">
									Manage your profile details, email, and password.
								</p>
							</TabsContent>
							<TabsContent value="billing" className="pt-3">
								<p className="text-sm text-muted-foreground">
									View invoices and update your payment method.
								</p>
							</TabsContent>
							<TabsContent value="settings" className="pt-3">
								<p className="text-sm text-muted-foreground">
									Configure workspace preferences and members.
								</p>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Search Input</CardTitle>
						<CardDescription>
							Input with an inline icon and button group.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<div className="relative">
							<Search className="pointer-events-none absolute top-1/2 left-2.5 z-10 size-4 -translate-y-1/2 text-muted-foreground" />
							<Input
								type="search"
								placeholder="Search…"
								className="pl-8"
								aria-label="Search"
							/>
						</div>
						<ButtonGroup>
							<Input
								placeholder="Quick action…"
								aria-label="Quick action"
							/>
							<Button>Run</Button>
						</ButtonGroup>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}