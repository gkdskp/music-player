import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Row(
        children: [
          Drawer(
            child: Container(
              child: ListView(
                children: [
                  DrawerHeader(
                    child: Container(
                      height: 700
                    ),
                  ),
                  ListTile(
                    leading: Icon(Icons.home),
                    focusColor: Colors.blue,
                    hoverColor: Colors.blue,
                    title: Text('Home'),
                    onTap: () {
                      print("Hello");
                    },
                    selectedTileColor: Colors.blue,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.only(topRight: Radius.circular(40.0), bottomRight: Radius.circular(40.0))),
                  ),
                   ListTile(
                    leading: Icon(Icons.record_voice_over_sharp),
                    focusColor: Colors.blue,
                    hoverColor: Colors.blue,
                    title: Text('Songs'),
                    onTap: () {
                      print("Hello");
                    },
                  ),
                   ListTile(
                    leading: Icon(Icons.person),
                    focusColor: Colors.blue,
                    hoverColor: Colors.blue,
                    title: Text('Artists'),
                    onTap: () {
                      print("Hello");
                    },
                  ),
                   ListTile(
                    leading: Icon(Icons.notes_sharp),
                    focusColor: Colors.blue,
                    hoverColor: Colors.blue,
                    title: Text('Albums'),
                    onTap: () {
                      print("Hello");
                    },
                  ),
                  // ListTile(
                  //   leading: Icon(Icons.home),
                  //   title: Text('Home'),
                  //   onTap: () {
                  //     print("Hello");
                  //   },
                  // ),
                  // ListTile(
                  //   leading: Icon(Icons.home),
                  //   title: Text('Home'),
                  //   onTap: () {
                  //     print("Hello");
                  //   },
                  // ),
                  
                ],
              ),
            ),
            elevation: 0.0,
          ),
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  'You have pushed the button this many times:',
                ),
                Text(
                  '$_counter',
                  style: Theme.of(context).textTheme.headline4,
                ),
              ],
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(onPressed: () => {}, label: Text('Shuffle Play'), icon: Icon(Icons.shuffle),),
    );
  }
}
