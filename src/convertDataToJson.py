import sys
import csv
import json

file_name = sys.argv[1]

nodes = []
edges = []
numbered_nodes = {}

with open(file_name) as csvfile:
    csv_reader = csv.reader(csvfile)
    k = 0
    for i, row in enumerate(csv_reader):
        if i != 0:
            source_node = row[source_index]
            target_node = row[target_index]

            for node in [source_node, target_node]:
                if node not in numbered_nodes:
                    numbered_nodes[node] = k
                    nodes.append({"id": k, "label": node, "title": node})
                    k += 1
            
            this_edge = {
                "from": numbered_nodes[source_node],
                "to": numbered_nodes[target_node],
                "label": f"{edge_metadata}: {row[edge_metadata_index]}",
                "title": f"{edge_metadata}: {row[edge_metadata_index]}"
            }
            edges.append(this_edge)


# Write to output JSON files
with open("data/node_data.json", 'w') as outfile:
    json.dump(nodes, outfile)

with open("data/edge_data.json", 'w') as outfile:
    json.dump(edges, outfile)




