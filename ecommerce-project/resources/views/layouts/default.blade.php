<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>PCByte</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="{{asset('css/main.css')}}">
    </head>

<body class="px-5">
    <header class="row">
        @include('partials.header')
    </header>

    <div class="row" id="main">
      @yield('content')
      <form action="">
        <label for="name">Name</label>
        <input type="text" class="form-control">
        <label for="address">Address</label>
        <input type="text" class="form-control">
      </form>
    </div>
    <footer>
        @include('partials.footer')
    </footer>
</body>
</html>