import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:fitpad/features/qrcode/screens/calculators_screen.dart';
import 'package:fitpad/features/refer/screens/coupon.dart';
import 'package:fitpad/features/profile/screens/profile_screen.dart';
import 'package:fitpad/features/toDoList/models/toDoList_model.dart';
import 'package:fitpad/features/toDoList/screens/ToDolist_screen.dart';
import 'package:fitpad/features/dashboard/screens/dashboard_screen.dart';
import 'package:fitpad/shared/utils/constants.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final provider = Provider.of<TaskData>(context, listen: true);
    return Scaffold(
      body: SingleChildScrollView(
        physics: const NeverScrollableScrollPhysics(),
        child: Padding(
          padding:
              const EdgeInsets.only(left: 20, right: 16, bottom: 16, top: 30),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SafeArea(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    RichText(
                        text: TextSpan(children: [
                      const TextSpan(text: 'Vote', style: kTextStyleHeadings),
                      TextSpan(
                          text: 'One',
                          style: kTextStyleHeadings.copyWith(
                              color: Colors.deepPurple))
                    ])),
                    InkWell(
                      borderRadius: BorderRadius.circular(100),
                      onTap: () => Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const ProfileScreen(),
                          )),
                      child: StreamBuilder(
                          stream: FirebaseFirestore.instance
                              .collection('ProfileDetails')
                              .doc(FirebaseAuth.instance.currentUser!.uid)
                              .collection('ProfilePicture')
                              .doc(FirebaseAuth.instance.currentUser!.uid)
                              .snapshots(),
                          builder: (context, snapshot) {
                            if (!snapshot.hasData) {
                              return const CircleAvatar(
                                  backgroundColor: Colors.transparent,
                                  child:
                                      Icon(Icons.person, color: Colors.white));
                            }
                            return CircleAvatar(
                              backgroundImage: snapshot.data!
                                          .data()!['ProfilePicture'] ==
                                      null
                                  ? null
                                  : NetworkImage(
                                      snapshot.data!.data()!['ProfilePicture']),
                              backgroundColor: Colors.transparent,
                              child: snapshot.data!.data()!['ProfilePicture'] ==
                                      null
                                  ? const Icon(Icons.person,
                                      color: Colors.white)
                                  : null,
                            );
                          }),
                    )
                  ],
                ),
              ),
              const SizedBox(height: 30),
              const Text(
                'Dashboard',
                style: kTextStyleHeadings,
              ),
              const SizedBox(height: 10),
              StaggeredGrid.count(
                crossAxisCount: 4,
                mainAxisSpacing: 4,
                crossAxisSpacing: 4,
                children: [
                  StaggeredGridTile.count(
                    crossAxisCellCount: 4,
                    mainAxisCellCount: 2,
                    child: CardTile(
                      index: 1,
                      text: 'Leaderboard',
                      onTap: () => Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const dashboardScreen(),
                          )),
                    ),
                  ),
                  StaggeredGridTile.count(
                    crossAxisCellCount: 2,
                    mainAxisCellCount: 2,
                    child: Card(
                      elevation: 5,
                      shadowColor: Colors.grey,
                      color: Colors.red.shade400,
                      child: InkWell(
                        borderRadius: BorderRadius.circular(10),
                        onTap: () => Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const CalculatorsScreen(),
                          ),
                        ),
                        child: Ink(
                          child: const Icon(
                            FontAwesomeIcons.qrcode,
                            size: 45,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                  ),
                  StaggeredGridTile.count(
                    crossAxisCellCount: 2,
                    mainAxisCellCount: 4,
                    child: CardTile(
                      index: 3,
                      text: 'CREDIT',
                      onTap: () => Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const GymScreen(),
                          )),
                    ),
                  ),
                  StaggeredGridTile.count(
                    crossAxisCellCount: 2,
                    mainAxisCellCount: 2,
                    child: Card(
                      elevation: 5,
                      shadowColor: Colors.grey,
                      color: Colors.blue.shade600,
                      child: InkWell(
                        borderRadius: BorderRadius.circular(10),
                        onTap: () => Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => const ToDoListScreen(),
                            )),
                        child: Ink(
                          child: const Icon(
                            FontAwesomeIcons.personWalking,
                            size: 45,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class CardTile extends StatelessWidget {
  const CardTile(
      {Key? key, required this.text, required this.index, required this.onTap})
      : super(key: key);
  final String text;
  final int index;
  final Function() onTap;
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      color: Colors.transparent,
      shadowColor: Colors.grey,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(10),
        child: Ink(
          decoration: kContainerDecoration.copyWith(
              image: DecorationImage(
                  image: AssetImage('images/a$index.jpg'), fit: BoxFit.cover)),
          child: Padding(
            padding: const EdgeInsets.all(14.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.end,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(text,
                    style: kTextStyleHeaders.copyWith(color: Colors.white))
              ],
            ),
          ),
        ),
      ),
    );
  }
}
