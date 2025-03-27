
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="bg-red-500 p-10">{children}</div>
    </html>
  );
}
