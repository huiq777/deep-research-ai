export default function FontTest() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            字体测试页面
          </h1>
          <p className="text-xl text-muted-foreground">
            验证Dancing Script字体是否正确加载
          </p>
        </div>

        <div className="grid gap-6">
          {/* 默认字体 */}
          <div className="p-6 bg-card rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">默认字体</h2>
            <p className="text-lg">这是使用默认字体的文本：Deep Research</p>
          </div>

          {/* Dancing Script字体 */}
          <div className="p-6 bg-card rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">Dancing Script字体</h2>
            <p className="text-lg font-dancing">这是使用Dancing Script字体的文本：Deep Research</p>
          </div>

          {/* 不同大小的Dancing Script */}
          <div className="p-6 bg-card rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">不同大小的Dancing Script</h2>
            <div className="space-y-2">
              <p className="text-sm font-dancing">小号：Deep Research</p>
              <p className="text-base font-dancing">正常：Deep Research</p>
              <p className="text-lg font-dancing">大号：Deep Research</p>
              <p className="text-2xl font-dancing">更大：Deep Research</p>
              <p className="text-4xl font-dancing">超大：Deep Research</p>
            </div>
          </div>

          {/* 渐变效果 */}
          <div className="p-6 bg-card rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">渐变效果</h2>
            <p className="text-4xl font-dancing bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Deep Research
            </p>
          </div>

          {/* 字体信息 */}
          <div className="p-6 bg-card rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">字体信息</h2>
            <div className="space-y-2 text-sm">
              <p><strong>字体名称：</strong>Dancing Script</p>
              <p><strong>字体类型：</strong>手写体</p>
              <p><strong>来源：</strong>Google Fonts</p>
              <p><strong>文件格式：</strong>WOFF2</p>
              <p><strong>CSS类：</strong>font-dancing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
