import 'package:firebase_database/firebase_database.dart';
import 'package:fitpad/shared/utils/constants.dart';
import 'package:flutter/material.dart';

class OutputScreen extends StatefulWidget {
  const OutputScreen({super.key, this.name, this.index});
  final String? name;
  final int? index;
  @override
  State<OutputScreen> createState() => _OutputScreenState();
}

class _OutputScreenState extends State<OutputScreen> {
  List getData = [];

  final DatabaseReference _databaseReference =
      FirebaseDatabase.instance.reference();

  @override
  void initState() {
    _databaseReference
        .child('dashboardAsans')
        .once()
        .then((DatabaseEvent databaseEvent) {
      setState(() {
        getData = databaseEvent.snapshot.value as List;
      });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.name.toString(),
          style: kTextStyleHeaders,
        ),
      ),
      body: getData.isEmpty
          ? const Center(
              child: CircularProgressIndicator(
                color: blueColor,
              ),
            )
          : SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.only(left: 20, top: 20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('About:- ',
                            style: kTextStyleLarge.copyWith(
                                fontWeight: FontWeight.w700,
                                color: Colors.green)),
                        Text('${getData[widget.index!]['Benefits']}',
                            style: kTextStyleSmall),
                      ],
                    ),
                    const SizedBox(height: 5),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('No. of referals:- ',
                            style: kTextStyleLarge.copyWith(
                                fontWeight: FontWeight.w700,
                                color: Colors.amber)),
                        Text('${getData[widget.index!]['Breathing']}',
                            style: kTextStyleSmall),
                      ],
                    ),
                  ],
                ),
              ),
            ),
    );
  }
}
