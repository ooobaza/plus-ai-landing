param(
  [string]$ProjectRoot = (Split-Path -Parent $PSScriptRoot)
)

Add-Type -AssemblyName System.Drawing

$publicDir = Join-Path $ProjectRoot 'public'
$wordmarkPath = Join-Path $publicDir 'logo-plus-ai.png'
$faviconPath = Join-Path $publicDir 'favicon-plus-ai.png'
$appleTouchPath = Join-Path $publicDir 'apple-touch-icon.png'

function New-RoundedRectanglePath {
  param(
    [System.Drawing.RectangleF]$Rect,
    [float]$Radius
  )

  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $diameter = $Radius * 2
  $arc = New-Object System.Drawing.RectangleF($Rect.X, $Rect.Y, $diameter, $diameter)

  $path.AddArc($arc, 180, 90)
  $arc.X = $Rect.Right - $diameter
  $path.AddArc($arc, 270, 90)
  $arc.Y = $Rect.Bottom - $diameter
  $path.AddArc($arc, 0, 90)
  $arc.X = $Rect.X
  $path.AddArc($arc, 90, 90)
  $path.CloseFigure()
  return $path
}

function New-PlusPath {
  param(
    [float]$X,
    [float]$Y,
    [float]$Size
  )

  $points = @(
    [System.Drawing.PointF]::new($X + $Size * 0.43, $Y + $Size * 0.04),
    [System.Drawing.PointF]::new($X + $Size * 0.60, $Y + $Size * 0.04),
    [System.Drawing.PointF]::new($X + $Size * 0.56, $Y + $Size * 0.39),
    [System.Drawing.PointF]::new($X + $Size * 0.94, $Y + $Size * 0.39),
    [System.Drawing.PointF]::new($X + $Size * 0.88, $Y + $Size * 0.56),
    [System.Drawing.PointF]::new($X + $Size * 0.54, $Y + $Size * 0.56),
    [System.Drawing.PointF]::new($X + $Size * 0.49, $Y + $Size * 0.96),
    [System.Drawing.PointF]::new($X + $Size * 0.32, $Y + $Size * 0.96),
    [System.Drawing.PointF]::new($X + $Size * 0.38, $Y + $Size * 0.56),
    [System.Drawing.PointF]::new($X + $Size * 0.06, $Y + $Size * 0.56),
    [System.Drawing.PointF]::new($X + $Size * 0.12, $Y + $Size * 0.39),
    [System.Drawing.PointF]::new($X + $Size * 0.41, $Y + $Size * 0.39)
  )

  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddPolygon($points)
  return $path
}

function Set-HighQualityGraphics {
  param([System.Drawing.Graphics]$Graphics)
  $Graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $Graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $Graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $Graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
}

# Full transparent wordmark used in the website header and product previews.
$wordmark = New-Object System.Drawing.Bitmap 780, 400, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($wordmark)
Set-HighQualityGraphics $graphics
$graphics.Clear([System.Drawing.Color]::Transparent)

$markPath = New-PlusPath -X 26 -Y 24 -Size 350
$markBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  [System.Drawing.PointF]::new(0, 20),
  [System.Drawing.PointF]::new(0, 380),
  [System.Drawing.ColorTranslator]::FromHtml('#68F08A'),
  [System.Drawing.ColorTranslator]::FromHtml('#20CF74')
)
$graphics.FillPath($markBrush, $markPath)

$font = New-Object System.Drawing.Font('Segoe UI', 238, ([System.Drawing.FontStyle]::Bold -bor [System.Drawing.FontStyle]::Italic), [System.Drawing.GraphicsUnit]::Pixel)
$textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#F1F5F4'))
$textFormat = New-Object System.Drawing.StringFormat
$textFormat.FormatFlags = [System.Drawing.StringFormatFlags]::NoClip
$graphics.DrawString('AI', $font, $textBrush, [System.Drawing.PointF]::new(327, 62), $textFormat)

$wordmark.Save($wordmarkPath, [System.Drawing.Imaging.ImageFormat]::Png)

$textFormat.Dispose()
$textBrush.Dispose()
$font.Dispose()
$markBrush.Dispose()
$markPath.Dispose()
$graphics.Dispose()
$wordmark.Dispose()

function New-Favicon {
  param(
    [int]$Size,
    [string]$OutputPath
  )

  $bitmap = New-Object System.Drawing.Bitmap $Size, $Size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  Set-HighQualityGraphics $graphics
  $graphics.Clear([System.Drawing.Color]::Transparent)

  $inset = [float]($Size * 0.035)
  $backgroundRect = [System.Drawing.RectangleF]::new($inset, $inset, $Size - ($inset * 2), $Size - ($inset * 2))
  $backgroundPath = New-RoundedRectanglePath -Rect $backgroundRect -Radius ([float]($Size * 0.22))
  $backgroundBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    [System.Drawing.PointF]::new(0, 0),
    [System.Drawing.PointF]::new($Size, $Size),
    [System.Drawing.ColorTranslator]::FromHtml('#101B18'),
    [System.Drawing.ColorTranslator]::FromHtml('#07100E')
  )
  $graphics.FillPath($backgroundBrush, $backgroundPath)

  $borderPen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#24463E'), [float][Math]::Max(1, $Size * 0.012))
  $graphics.DrawPath($borderPen, $backgroundPath)

  $markSize = [float]($Size * 0.66)
  $markX = [float](($Size - $markSize) / 2)
  $markY = [float](($Size - $markSize) / 2)
  $markPath = New-PlusPath -X $markX -Y $markY -Size $markSize
  $markBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    [System.Drawing.PointF]::new(0, $markY),
    [System.Drawing.PointF]::new(0, $markY + $markSize),
    [System.Drawing.ColorTranslator]::FromHtml('#70F292'),
    [System.Drawing.ColorTranslator]::FromHtml('#25D37A')
  )
  $graphics.FillPath($markBrush, $markPath)

  $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)

  $markBrush.Dispose()
  $markPath.Dispose()
  $borderPen.Dispose()
  $backgroundBrush.Dispose()
  $backgroundPath.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
}

New-Favicon -Size 512 -OutputPath $faviconPath
New-Favicon -Size 180 -OutputPath $appleTouchPath

Write-Output "Generated:"
Write-Output $wordmarkPath
Write-Output $faviconPath
Write-Output $appleTouchPath
